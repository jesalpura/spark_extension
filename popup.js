// Daily Spark - Uplifting Message Generator
// Quotes Database categorized with positive vibes
const MESSAGES = [
  {
    text: "You don't have to have it all figured out to move forward. Just take the next small step.",
    author: "Daily Spark",
    category: "growth"
  },
  {
    text: "Your potential is not determined by where you start, but by the courage to keep going.",
    author: "Daily Spark",
    category: "motivation"
  },
  {
    text: "Breathe in calmness, exhale tension. You are doing much better than you give yourself credit for.",
    author: "Daily Spark",
    category: "peace"
  },
  {
    text: "Small progress every single day adds up to massive results. Keep shining.",
    author: "Daily Spark",
    category: "motivation"
  },
  {
    text: "Notice the simple things today: a warm cup, a fresh breeze, a kind word. There is always something to appreciate.",
    author: "Daily Spark",
    category: "gratitude"
  },
  {
    text: "Mistakes are simply proof that you are trying, learning, and expanding your horizons.",
    author: "Daily Spark",
    category: "growth"
  },
  {
    text: "Give yourself permission to pause. Rest is not a reward—it is a vital part of the journey.",
    author: "Daily Spark",
    category: "peace"
  },
  {
    text: "Whatever energy you put into the world today, make sure it is fueled by kindness and honesty.",
    author: "Daily Spark",
    category: "gratitude"
  },
  {
    text: "You have survived 100% of your hardest days so far. You are stronger and more resilient than you know.",
    author: "Daily Spark",
    category: "motivation"
  },
  {
    text: "Believe that something wonderful is about to happen today.",
    author: "Daily Spark",
    category: "joy"
  },
  {
    text: "Your voice, your ideas, and your presence matter. Never shrink yourself to fit someone else's comfort zone.",
    author: "Daily Spark",
    category: "growth"
  },
  {
    text: "Peace begins the moment you decide not to allow another person or event to control your emotions.",
    author: "Daily Spark",
    category: "peace"
  },
  {
    text: "Celebrate the small wins today. Even getting out of bed and showing up is a triumph.",
    author: "Daily Spark",
    category: "gratitude"
  },
  {
    text: "Doubt kills more dreams than failure ever will. Trust your instincts and take the leap.",
    author: "Daily Spark",
    category: "motivation"
  },
  {
    text: "Be gentle with yourself. You are doing the best you can with what you have right now.",
    author: "Daily Spark",
    category: "peace"
  },
  {
    text: "Every master was once a beginner. Keep practicing, keep refining, keep believing.",
    author: "Daily Spark",
    category: "growth"
  },
  {
    text: "Radiate positive energy. It costs nothing, lifts others, and boomerangs right back to you.",
    author: "Daily Spark",
    category: "joy"
  },
  {
    text: "Today is a fresh canvas. Paint it with bold strokes, vibrant colors, and zero regrets.",
    author: "Daily Spark",
    category: "motivation"
  },
  {
    text: "In the middle of difficulty lies opportunity. Keep your chin up and eyes open.",
    author: "Daily Spark",
    category: "growth"
  },
  {
    text: "Gratitude turns what we have into enough, and more. Take a moment to smile at what's working.",
    author: "Daily Spark",
    category: "gratitude"
  },
  {
    text: "Quiet the mind and the soul will speak. You have all the answers you need within.",
    author: "Daily Spark",
    category: "peace"
  },
  {
    text: "Smile! You are a unique miracle of nature, and someone out there is thankful you exist.",
    author: "Daily Spark",
    category: "joy"
  }
];

// State
let currentMessage = null;
let currentCategory = "all";
let favorites = [];
let sparkCount = 1;

// Elements
const quoteTextEl = document.getElementById("quote-text");
const quoteAuthorEl = document.getElementById("quote-author");
const cardTagEl = document.getElementById("card-tag");
const sparkCounterEl = document.getElementById("spark-counter");
const btnNewSpark = document.getElementById("btn-new-spark");
const btnCopy = document.getElementById("btn-copy");
const btnFav = document.getElementById("btn-fav");
const btnNotify = document.getElementById("btn-notify");
const toastEl = document.getElementById("toast");
const toastMsgEl = document.getElementById("toast-message");
const categoryChipsEl = document.getElementById("category-chips");

const tabHome = document.getElementById("tab-home");
const tabFavs = document.getElementById("tab-favs");
const viewHome = document.getElementById("view-home");
const viewFavs = document.getElementById("view-favs");
const favsListEl = document.getElementById("favs-list");
const favCountEl = document.getElementById("fav-count");

const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");

// Confetti Particles system
let particles = [];
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function triggerSparkles() {
  const count = 36;
  const colors = ["#6366f1", "#a855f7", "#ec4899", "#fbbf24", "#06b6d4", "#ffffff"];
  const centerX = canvas.width / 2;
  const centerY = canvas.height * 0.45;

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 5;
    particles.push({
      x: centerX,
      y: centerY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 1.5,
      size: 3 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      decay: 0.025 + Math.random() * 0.02,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 8
    });
  }

  if (particles.length === count) {
    requestAnimationFrame(renderSparkles);
  }
}

function renderSparkles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.12; // gravity
    p.alpha -= p.decay;
    p.rotation += p.rotSpeed;

    if (p.alpha <= 0) {
      particles.splice(i, 1);
      continue;
    }

    ctx.save();
    ctx.globalAlpha = p.alpha;
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
    ctx.restore();
  }

  if (particles.length > 0) {
    requestAnimationFrame(renderSparkles);
  }
}

// Show Toast feedback
let toastTimeout;
function showToast(message) {
  toastMsgEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2200);
}

// Get filtered messages
function getFilteredMessages() {
  if (currentCategory === "all") return MESSAGES;
  return MESSAGES.filter(m => m.category === currentCategory);
}

// Pick and display a new message
function displayNewMessage(triggerEffect = true) {
  const pool = getFilteredMessages();
  let candidate = pool[Math.floor(Math.random() * pool.length)];

  // Avoid identical message if more than 1 available
  if (pool.length > 1 && currentMessage && candidate.text === currentMessage.text) {
    const remaining = pool.filter(m => m.text !== currentMessage.text);
    candidate = remaining[Math.floor(Math.random() * remaining.length)];
  }

  currentMessage = candidate;
  sparkCount++;

  // Animate change
  quoteTextEl.classList.add("changing");
  quoteAuthorEl.classList.add("changing");

  setTimeout(() => {
    quoteTextEl.textContent = currentMessage.text;
    quoteAuthorEl.textContent = `— ${currentMessage.author}`;
    cardTagEl.textContent = currentMessage.category;
    sparkCounterEl.textContent = `Spark #${sparkCount}`;

    updateFavButtonState();

    quoteTextEl.classList.remove("changing");
    quoteAuthorEl.classList.remove("changing");
  }, 180);

  if (triggerEffect) {
    triggerSparkles();
  }

  // Save session count in local storage
  if (chrome?.storage?.local) {
    chrome.storage.local.set({ lastSparkCount: sparkCount });
  }
}

// Update Favorite Button visual state
function updateFavButtonState() {
  if (!currentMessage) return;
  const isFav = favorites.some(f => f.text === currentMessage.text);
  if (isFav) {
    btnFav.classList.add("active");
  } else {
    btnFav.classList.remove("active");
  }
}

// Save or Toggle Favorite
function toggleFavorite() {
  if (!currentMessage) return;
  const index = favorites.findIndex(f => f.text === currentMessage.text);
  if (index > -1) {
    favorites.splice(index, 1);
    showToast("Removed from favorites");
  } else {
    favorites.unshift({ ...currentMessage, savedAt: Date.now() });
    showToast("Saved to favorites! ❤️");
  }
  updateFavButtonState();
  updateFavoritesUI();
  saveFavorites();
}

function saveFavorites() {
  if (chrome?.storage?.local) {
    chrome.storage.local.set({ sparkFavorites: favorites });
  }
}

function loadFavorites() {
  if (chrome?.storage?.local) {
    chrome.storage.local.get(["sparkFavorites", "lastSparkCount"], (result) => {
      if (result.sparkFavorites && Array.isArray(result.sparkFavorites)) {
        favorites = result.sparkFavorites;
      }
      if (result.lastSparkCount) {
        sparkCount = result.lastSparkCount;
        sparkCounterEl.textContent = `Spark #${sparkCount}`;
      }
      updateFavoritesUI();
      updateFavButtonState();
    });
  }
}

function updateFavoritesUI() {
  favCountEl.textContent = favorites.length;
  if (favorites.length > 0) {
    favCountEl.classList.add("visible");
  } else {
    favCountEl.classList.remove("visible");
  }

  if (favorites.length === 0) {
    favsListEl.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">✨</div>
        <p>No favorites saved yet.</p>
        <p style="font-size:11px; margin-top:4px;">Click the heart icon on any message to save it here!</p>
      </div>
    `;
    return;
  }

  favsListEl.innerHTML = "";
  favorites.forEach((fav, i) => {
    const item = document.createElement("div");
    item.className = "fav-item";
    item.innerHTML = `
      <p class="fav-item-text">“${fav.text}”</p>
      <div class="fav-item-footer">
        <span class="fav-item-author">${fav.category.toUpperCase()}</span>
        <div class="fav-item-actions">
          <button class="fav-copy-btn" title="Copy message">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
          </button>
          <button class="fav-del-btn" title="Remove">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    // Copy action
    item.querySelector(".fav-copy-btn").addEventListener("click", () => {
      navigator.clipboard.writeText(`"${fav.text}" — ${fav.author}`).then(() => {
        showToast("Copied to clipboard! 📋");
      });
    });

    // Delete action
    item.querySelector(".fav-del-btn").addEventListener("click", () => {
      favorites.splice(i, 1);
      saveFavorites();
      updateFavoritesUI();
      updateFavButtonState();
      showToast("Removed from favorites");
    });

    favsListEl.appendChild(item);
  });
}

// Copy current quote
function copyCurrentQuote() {
  if (!currentMessage) return;
  const formatted = `"${currentMessage.text}" — ${currentMessage.author}`;
  navigator.clipboard.writeText(formatted).then(() => {
    showToast("Copied to clipboard! ✨");
  }).catch(() => {
    showToast("Failed to copy");
  });
}

// Send Desktop Notification
function sendNotification() {
  if (!currentMessage) return;

  if (chrome?.notifications) {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icons/icon128.png",
      title: "Daily Spark ✨",
      message: currentMessage.text,
      priority: 2
    }, () => {
      showToast("Notification sent! 🔔");
    });
  } else {
    showToast("Notifications not supported in this context");
  }
}

// Category filter click
categoryChipsEl.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;

  categoryChipsEl.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
  chip.classList.add("active");
  currentCategory = chip.dataset.cat;
  displayNewMessage(true);
});

// Event Listeners
btnNewSpark.addEventListener("click", () => displayNewMessage(true));
btnCopy.addEventListener("click", copyCurrentQuote);
btnFav.addEventListener("click", toggleFavorite);
btnNotify.addEventListener("click", sendNotification);

// View Switcher (Tabs)
tabHome.addEventListener("click", () => {
  tabHome.classList.add("active");
  tabFavs.classList.remove("active");
  viewHome.classList.add("active");
  viewFavs.classList.remove("active");
});

tabFavs.addEventListener("click", () => {
  tabFavs.classList.add("active");
  tabHome.classList.remove("active");
  viewFavs.classList.add("active");
  viewHome.classList.remove("active");
});

// Init
loadFavorites();
displayNewMessage(false);
