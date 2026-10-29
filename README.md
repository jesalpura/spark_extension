<div align="center">

# ✨ Daily Spark

### A Chrome Extension that delivers instant uplifting messages

![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-34A853?style=for-the-badge&logo=google&logoColor=white)
![Vanilla JS](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-a855f7?style=for-the-badge)

<br/>

![Daily Spark Screenshot](Screenshot%202026-10-29%20150020.png)

</div>

---

## 📖 About

**Daily Spark** is a lightweight Chrome browser extension that gives you an instant burst of positivity, motivation, and uplifting thoughts whenever you click its toolbar icon. Built with **pure HTML, CSS, and JavaScript** — no frameworks, no bloat.

It showcases real Chrome Extension APIs including **chrome.storage**, **chrome.notifications**, and the **Manifest V3** architecture.

---

## 🚀 Features

| Feature | Description |
|---|---|
| ✨ **Instant Spark** | A beautiful uplifting message card opens on every click |
| 🎨 **Category Filters** | Filter by Motivation 🔥, Peace 🌿, Growth 🚀, Gratitude 💛, or All |
| 🎉 **Confetti Particles** | Canvas-powered sparkle burst on every new message |
| ❤️ **Save Favorites** | Bookmark your favorite quotes — persisted with `chrome.storage.local` |
| 📋 **One-Click Copy** | Copy any quote to clipboard instantly |
| 🔔 **Desktop Notification** | Send the message as a system notification via Chrome's Notifications API |
| 🌙 **Dark Glassmorphic UI** | Modern dark theme with glassmorphism, gradients, and smooth animations |

---

## 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, glassmorphism, keyframe animations, transitions
- **Vanilla JavaScript (ES6+)** — No frameworks, pure DOM manipulation
- **Chrome Extension APIs** — `chrome.storage.local`, `chrome.notifications`
- **Canvas API** — Custom particle confetti system
- **Manifest V3** — Latest Chrome extension specification

---

## 📁 Project Structure

```
Extension/
├── manifest.json          # Extension config (Manifest V3)
├── popup.html             # Popup UI structure
├── popup.css              # Styling — dark glassmorphic theme
├── popup.js               # Core logic — quotes, particles, storage
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md
```

---

## ⚡ Installation (Load Unpacked in Chrome)

> No Web Store needed — load it directly as a developer extension.

1. **Clone this repository**
   ```bash
   git clone https://github.com/jesalpura/spark_extension.git
   ```

2. **Open Chrome** and navigate to:
   ```
   chrome://extensions
   ```

3. **Enable Developer Mode** — Toggle the switch in the top-right corner.

4. **Click "Load Unpacked"** — Select the cloned project folder.

5. **Pin the Extension** — Click the 🧩 puzzle icon in the toolbar → click the 📌 Pin icon next to **Daily Spark**.

6. **Click the extension icon** anytime for a spark of positivity! ✨

---

## 💡 What I Learned Building This

- How **Chrome Extension Manifest V3** differs from V2 (service workers, stricter CSP)
- Using **`chrome.storage.local`** for persistent state without a backend
- Using **`chrome.notifications`** API to push system-level desktop alerts
- Building a **canvas-based particle system** from scratch in vanilla JS
- Designing a **premium dark UI** using CSS glassmorphism, gradients, and micro-animations

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute it.

---

<div align="center">

Made with ❤️ and a lot of good energy ✨

</div>
