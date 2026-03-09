"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Play, Pause, SkipBack, SkipForward,
  Volume2, VolumeX, Shuffle, Repeat, Repeat1,
  Heart, ListMusic, X, Music2,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: number;
  color: string;
  youtubeId: string;
}

declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
  }
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const TRACKS: Track[] = [
  { id: 1, title: "Belonging / Becoming", artist: "Hammock", album: "Mysterium",      duration: 387, color: "#7eb8c9", youtubeId: "Lv6zli0nDVM" },
  { id: 2, title: "The Way Forward",      artist: "Harry Gregson-Williams", album: "We Are Atlas", duration: 412, color: "#a0c4b8", youtubeId: "xBDCyF_kOZ8" },
];

const fmt = (s: number) =>
  `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function MusicPlayer() {
  const [open, setOpen]           = useState(false);
  const [idx, setIdx]             = useState(0);
  const [playing, setPlaying]     = useState(false);
  const [progress, setProgress]   = useState(0);
  const [duration, setDuration]   = useState(TRACKS[0].duration);
  const [elapsed, setElapsed]     = useState(0);
  const [volume, setVolume]       = useState(70);
  const [muted, setMuted]         = useState(false);
  const [shuffle, setShuffle]     = useState(false);
  const [repeat, setRepeat]       = useState<"off" | "all" | "one">("off");
  const [liked, setLiked]         = useState<Set<number>>(new Set());
  const [queueOpen, setQueueOpen] = useState(false);
  const [ytReady, setYtReady]     = useState(false);

  const playerRef   = useRef<YT.Player | null>(null);
  const tickRef     = useRef<ReturnType<typeof setInterval> | null>(null);
  const iframeElRef = useRef<HTMLDivElement>(null);
  const handleNextRef = useRef<() => void>(() => {});

  const track = TRACKS[idx];
  const vol   = muted ? 0 : volume;

  // ── YouTube API ────────────────────────────────────────────────────────────

  useEffect(() => {
    if (window.YT && window.YT.Player) { initPlayer(); return; }
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
    window.onYouTubeIframeAPIReady = () => setYtReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => { if (ytReady) initPlayer(); }, [ytReady]); // eslint-disable-line

  function initPlayer() {
    if (!iframeElRef.current) return;
    playerRef.current = new window.YT.Player(iframeElRef.current, {
      height: "1", width: "1",
      videoId: TRACKS[0].youtubeId,
      playerVars: { autoplay: 0, controls: 0, disablekb: 1, fs: 0, iv_load_policy: 3, modestbranding: 1, rel: 0 },
      events: {
        onReady: (e: YT.PlayerEvent) => { e.target.setVolume(70); },
        onStateChange: (e: YT.OnStateChangeEvent) => {
          if (e.data === window.YT.PlayerState.ENDED) handleNextRef.current();
        },
      },
    });
  }

  const handleNext = useCallback(() => {
    if (repeat === "one") {
      playerRef.current?.seekTo(0, true);
      playerRef.current?.playVideo();
      setElapsed(0); setProgress(0); return;
    }
    const nextIdx = shuffle
      ? (idx + 1 + Math.floor(Math.random() * (TRACKS.length - 1))) % TRACKS.length
      : (idx + 1) % TRACKS.length;
    setIdx(nextIdx); setProgress(0); setElapsed(0); setPlaying(true);
    playerRef.current?.loadVideoById(TRACKS[nextIdx].youtubeId);
  }, [idx, repeat, shuffle]);

  useEffect(() => { handleNextRef.current = handleNext; }, [handleNext]);

  useEffect(() => {
    if (!playerRef.current) return;
    playerRef.current.setVolume(vol);
    if (muted) playerRef.current.mute(); else playerRef.current.unMute();
  }, [vol, muted]);

  useEffect(() => {
    if (!playerRef.current) return;
    if (playing) { playerRef.current.playVideo(); startTick(); }
    else { playerRef.current.pauseVideo(); stopTick(); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  useEffect(() => {
    if (!playerRef.current) return;
    setDuration(TRACKS[idx].duration);
    if (playing) playerRef.current.loadVideoById(TRACKS[idx].youtubeId);
    else playerRef.current.cueVideoById(TRACKS[idx].youtubeId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  function startTick() {
    stopTick();
    tickRef.current = setInterval(() => {
      const p = playerRef.current;
      if (!p) return;
      const cur = p.getCurrentTime?.() ?? 0;
      const dur = p.getDuration?.() ?? TRACKS[idx].duration;
      setElapsed(Math.floor(cur));
      setDuration(Math.floor(dur) || TRACKS[idx].duration);
      setProgress(dur > 0 ? (cur / dur) * 100 : 0);
    }, 500);
  }

  function stopTick() {
    if (tickRef.current) { clearInterval(tickRef.current); tickRef.current = null; }
  }

  useEffect(() => () => stopTick(), []);

  function handleScrub(val: number) {
    setProgress(val);
    const dur = playerRef.current?.getDuration?.() ?? duration;
    playerRef.current?.seekTo((val / 100) * dur, true);
  }

  function handlePrev() {
    if (elapsed > 5) { playerRef.current?.seekTo(0, true); setElapsed(0); setProgress(0); return; }
    setIdx(i => (i - 1 + TRACKS.length) % TRACKS.length);
    setProgress(0); setElapsed(0);
  }

  function selectTrack(i: number) {
    setIdx(i); setProgress(0); setElapsed(0); setPlaying(true);
    playerRef.current?.loadVideoById(TRACKS[i].youtubeId);
  }

  function toggleLike(id: number) {
    setLiked(s => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });
  }

  function cycleRepeat() {
    setRepeat(r => r === "off" ? "all" : r === "all" ? "one" : "off");
  }

  // ─── Render ────────────────────────────────────────────────────────────────

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');
        .mp-root { font-family: 'DM Sans', sans-serif; }
        .mp-range {
          -webkit-appearance: none; appearance: none;
          width: 100%; height: 4px; border-radius: 99px;
          outline: none; cursor: pointer; transition: background .2s;
        }
        .mp-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 14px; height: 14px; border-radius: 50%;
          background: var(--mp-accent, hsl(var(--primary)));
          border: 2px solid hsl(var(--background));
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--mp-accent, hsl(var(--primary))) 28%, transparent);
          cursor: pointer; transition: background .3s;
        }
        .mp-range::-moz-range-thumb {
          width: 14px; height: 14px; border-radius: 50%;
          background: var(--mp-accent, hsl(var(--primary)));
          border: 2px solid hsl(var(--background)); cursor: pointer;
        }
        .mp-queue { max-height: 220px; overflow-y: auto; scrollbar-width: thin; scrollbar-color: hsl(var(--border)) transparent; }
        .mp-queue-row {
          display: flex; align-items: center; gap: 10px;
          padding: 6px 8px; border-radius: 10px;
          cursor: pointer; border: none; background: none;
          width: 100%; text-align: left; transition: background .15s;
          color: hsl(var(--foreground));
        }
        .mp-queue-row:hover  { background: hsl(var(--accent)); }
        .mp-queue-row.active { background: hsl(var(--accent)); }
        .mp-collapsible { overflow: hidden; max-height: 0; transition: max-height .3s cubic-bezier(.4,0,.2,1); }
        .mp-collapsible.open { max-height: 400px; }
        .mp-panel {
          opacity: 0; pointer-events: none;
          transform: translateY(10px);
          transition: opacity .25s ease, transform .25s ease;
          margin-bottom: 10px;
        }
        .mp-panel.open {
          opacity: 1; pointer-events: auto;
          transform: translateY(0);
        }
      `}</style>

      {/* Hidden YT iframe */}
      <div style={{ position: "fixed", top: -10, left: -10, width: 1, height: 1, overflow: "hidden", pointerEvents: "none" }} aria-hidden="true">
        <div ref={iframeElRef} />
      </div>

      {/* Floating container — bottom right */}
      <div className="mp-root fixed bottom-6 right-6 z-50 flex flex-col items-end">

        {/* Fading player panel */}
        <div className={`mp-panel${open ? " open" : ""}`}>
          <Card
            className="w-80 overflow-hidden border border-border/60 shadow-2xl"
            style={{
              background: `radial-gradient(ellipse at 70% 0%, ${track.color}18 0%, transparent 65%), hsl(var(--card))`,
              transition: "background .6s ease",
            }}
          >
            <CardContent className="p-0">

              {/* Hero */}
              <div className="px-5 pt-5 pb-3">
                <div className="flex justify-end mb-1">
                  <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground" onClick={() => setQueueOpen(o => !o)}>
                    {queueOpen ? <X size={14} /> : <ListMusic size={14} />}
                  </Button>
                </div>

                {/* Artwork */}
                <div className="flex justify-center mb-4">
                  <div style={{
                    width: 148, height: 148, borderRadius: 18,
                    background: `radial-gradient(circle at 30% 25%, ${track.color}ee, ${track.color}44)`,
                    boxShadow: `0 12px 40px ${track.color}55`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontFamily: "'DM Serif Display', serif",
                    fontSize: 46, letterSpacing: "-0.02em", userSelect: "none",
                    transform: playing ? "scale(1.05)" : "scale(1)",
                    transition: "transform .5s cubic-bezier(.34,1.56,.64,1), box-shadow .5s",
                  }}>
                    {track.title.slice(0, 2).toUpperCase()}
                  </div>
                </div>

                {/* Track info */}
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate text-foreground" style={{ fontFamily: "'DM Serif Display', serif", fontSize: 19, lineHeight: 1.15 }}>
                      {track.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 truncate">{track.artist} · {track.album}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0"
                    style={{ color: liked.has(track.id) ? "#f43f5e" : undefined }}
                    onClick={() => toggleLike(track.id)}>
                    <Heart size={15} fill={liked.has(track.id) ? "#f43f5e" : "none"} color={liked.has(track.id) ? "#f43f5e" : "currentColor"} />
                  </Button>
                </div>
              </div>

              {/* Controls */}
              <div className="px-5 pb-5 flex flex-col gap-3">

                {/* Progress */}
                <div>
                  <input type="range" className="mp-range" min={0} max={100} step={0.1}
                    value={progress}
                    onChange={e => handleScrub(Number(e.target.value))}
                    aria-label="Playback progress"
                    style={{
                      background: `linear-gradient(to right, ${track.color} ${progress}%, hsl(var(--border)) ${progress}%)`,
                      ["--mp-accent" as string]: track.color,
                    }}
                  />
                  <div className="flex justify-between mt-1 text-[10px] text-muted-foreground tabular-nums">
                    <span>{fmt(elapsed)}</span>
                    <span>{fmt(duration)}</span>
                  </div>
                </div>

                {/* Playback buttons */}
                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="icon" className={`h-7 w-7 ${shuffle ? "text-foreground" : "text-muted-foreground"}`}
                    onClick={() => setShuffle(s => !s)} aria-label="Shuffle">
                    <Shuffle size={14} />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handlePrev} aria-label="Previous">
                    <SkipBack size={18} fill="currentColor" />
                  </Button>
                  <button
                    onClick={() => setPlaying(p => !p)}
                    aria-label={playing ? "Pause" : "Play"}
                    style={{
                      width: 48, height: 48, borderRadius: "50%", border: "none", cursor: "pointer",
                      background: track.color, boxShadow: `0 4px 20px ${track.color}80`,
                      display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
                      transition: "transform .15s, box-shadow .4s, background .4s",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
                    onMouseDown={e  => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(.93)"; }}
                    onMouseUp={e    => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08)"; }}
                  >
                    {playing ? <Pause size={18} fill="#fff" /> : <Play size={18} fill="#fff" style={{ transform: "translateX(1px)" }} />}
                  </button>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleNext} aria-label="Next">
                    <SkipForward size={18} fill="currentColor" />
                  </Button>
                  <Button variant="ghost" size="icon" className={`h-7 w-7 ${repeat !== "off" ? "text-foreground" : "text-muted-foreground"}`}
                    onClick={cycleRepeat} aria-label={`Repeat: ${repeat}`}>
                    {repeat === "one" ? <Repeat1 size={14} /> : <Repeat size={14} />}
                  </Button>
                </div>

                {/* Volume */}
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground shrink-0 p-0"
                    onClick={() => setMuted(m => !m)} aria-label={muted ? "Unmute" : "Mute"}>
                    {vol === 0 ? <VolumeX size={13} /> : <Volume2 size={13} />}
                  </Button>
                  <input type="range" className="mp-range" min={0} max={100} step={1}
                    value={vol}
                    onChange={e => { setVolume(Number(e.target.value)); setMuted(false); }}
                    aria-label="Volume"
                    style={{
                      background: `linear-gradient(to right, hsl(var(--muted-foreground)) ${vol}%, hsl(var(--border)) ${vol}%)`,
                      ["--mp-accent" as string]: "hsl(var(--muted-foreground))",
                    }}
                  />
                  <span className="text-[10px] text-muted-foreground w-5 text-right tabular-nums">{vol}</span>
                </div>

                {/* Queue */}
                <div className={`mp-collapsible${queueOpen ? " open" : ""}`}>
                  <div className="h-px bg-border my-1" />
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-2 mt-2">Queue</p>
                  <div className="mp-queue">
                    {TRACKS.map((t, i) => (
                      <button key={t.id} onClick={() => selectTrack(i)} className={`mp-queue-row${i === idx ? " active" : ""}`}>
                        <Avatar className="h-8 w-8 shrink-0 rounded-lg">
                          <AvatarFallback className="rounded-lg text-white text-[10px] font-bold"
                            style={{ background: `radial-gradient(circle at 30% 25%, ${t.color}ee, ${t.color}55)` }}>
                            {t.title.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium truncate">{t.title}</p>
                          <p className="text-[10px] text-muted-foreground">{t.artist}</p>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          {liked.has(t.id) && <Heart size={10} fill="#f43f5e" color="#f43f5e" />}
                          <Badge variant="outline" className="text-[10px] tabular-nums px-1 py-0 text-muted-foreground">
                            {fmt(t.duration)}
                          </Badge>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trigger button */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? "Close player" : "Open music player"}
          style={{
            width: 44, height: 44, borderRadius: "50%",
            border: "1px solid hsl(var(--border))",
            cursor: "pointer",
            background: open ? track.color : "hsl(var(--card))",
            boxShadow: open ? `0 4px 20px ${track.color}80` : "0 2px 12px rgba(0,0,0,.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: open ? "#fff" : "hsl(var(--muted-foreground))",
            transition: "background .3s, box-shadow .3s, color .3s, transform .15s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
        >
          {open ? <X size={18} /> : <Music2 size={18} />}
        </button>

      </div>
    </>
  );
}