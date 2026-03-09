# 🌊 The Tempest — Interactive Website

> *"We are such stuff as dreams are made on, and our little life is rounded with a sleep."*
> — William Shakespeare, The Tempest

A fully interactive website dedicated to **William Shakespeare's *The Tempest***, featuring an immersive music player, community testimonials, a comprehensive FAQ, character profiles, and more. Built with passion by **Carlos**.

---

## 📖 About the Project

This website brings Shakespeare's *The Tempest* to life in a modern, digital experience. *The Tempest* is one of Shakespeare's final plays, written around **1610–1611**, and tells the story of **Prospero**, a sorcerer and rightful Duke of Milan, who uses magic to reclaim his throne after being stranded on a remote island with his daughter **Miranda**.

The play explores themes of **power, betrayal, forgiveness, freedom, and colonialism** — making it as relevant today as it was four centuries ago.

---

## ✨ Features

### 🎵 Music Player
An atmospheric music player that sets the mood for the world of *The Tempest*. Includes:
- Curated playlist of original and classical compositions inspired by the play
- Play, pause, skip, and volume controls
- Track display with album art and song titles
- Responsive design for desktop and mobile

### 💬 Testimonials Section
A dedicated section showcasing what readers, students, and theatre-goers have to say about *The Tempest* and the website experience. Includes:
- Rotating testimonial cards with user names and ratings
- Quotes from academics, fans, and first-time readers
- A clean, elegant carousel layout

### ❓ FAQ Section
An interactive Frequently Asked Questions section covering everything about the play, including:
- Plot summaries and scene breakdowns
- Character analysis and relationships
- Historical context and Shakespeare's writing process
- Themes, motifs, and symbolism explained
- Commonly asked questions from students and enthusiasts

### 👥 Character Profiles
A dedicated section introducing the key characters of the play:
- **Prospero** — The powerful sorcerer and deposed Duke of Milan
- **Miranda** — Prospero's compassionate and curious daughter
- **Ariel** — A spirit bound to serve Prospero
- **Caliban** — The island's native inhabitant, enslaved by Prospero
- **Ferdinand** — Prince of Naples, who falls in love with Miranda
- **Gonzalo, Antonio, Sebastian** — The shipwrecked Neapolitan nobles

---

## 🛠️ Installation & Setup

Follow the steps below to get the project running locally on your machine.

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Clone the Repository

```bash
git clone https://github.com/carlos/the-tempest-website.git
cd the-tempest-website
```

### Install Dependencies

```bash
npm install
```

Or with yarn:

```bash
yarn install
```

### Run the Development Server

```bash
npm run dev
```

Then open your browser and navigate to:

```
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `/dist` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Viewing the Live Site

The website is hosted and accessible online. No installation required to view it!

🔗 **Live Demo:** [https://the-tempest.carlos.dev](https://the-tempest.carlos.dev)

> *(Replace this URL with your actual deployment link)*

---

## 📁 Project Structure

```
the-tempest-website/
├── public/
│   ├── audio/          # Music player tracks
│   ├── images/         # Character art and background assets
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── MusicPlayer/
│   │   ├── Testimonials/
│   │   ├── FAQ/
│   │   └── Characters/
│   ├── styles/
│   ├── data/
│   │   ├── faq.js
│   │   ├── testimonials.js
│   │   └── characters.js
│   └── main.js
├── index.html
├── package.json
└── README.md
```

---

## 🎭 About the Play

| Detail | Info |
|--------|------|
| **Title** | The Tempest |
| **Author** | William Shakespeare |
| **Written** | c. 1610–1611 |
| **Genre** | Romantic comedy / Tragicomedy |
| **Setting** | A remote, enchanted island |
| **First Performed** | November 1, 1611 (at Whitehall Palace) |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

The works of William Shakespeare are in the **public domain**.

---

## 🙌 Acknowledgements

- William Shakespeare, for writing one of the greatest plays of all time
- The open-source community for libraries and tools used in this project
- Everyone who submitted testimonials and feedback

---

> *"O brave new world, that has such people in't!"*
> — Miranda, Act V, Scene I