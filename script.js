const pages = {
  name: document.getElementById("page-name"),
  dob: document.getElementById("page-dob"),
  surprise: document.getElementById("page-surprise"),
  memories: document.getElementById("page-memories")
};

function showPage(page) {
  Object.values(pages).forEach((p) => p.classList.remove("active"));
  page.classList.add("active");
  window.scrollTo({ top: 0, behavior: "instant" });
}

// Name validation
document.getElementById("name-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.getElementById("name-input");
  const error = document.getElementById("name-error");
  const value = input.value.trim();

  if (value !== "Momina") {
    error.textContent = "❌ Oops! This project is only for Momina 💗";
    input.classList.remove("shake");
    void input.offsetWidth;
    input.classList.add("shake");
    return;
  }

  error.textContent = "";
  showPage(pages.dob);
});

// Date validation
document.getElementById("dob-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.getElementById("dob-input");
  const error = document.getElementById("dob-error");
  const value = input.value;

  // We intentionally check only day + month because the requirement is 1st September.
  if (!value) {
    error.textContent = "🎀 Enter your birthday first!";
    return;
  }

  const [year, month, day] = value.split("-").map(Number);

  if (month !== 9 || day !== 1) {
    error.textContent = "❌ Wrong date of birth! I think you forgot your own birthday 😭💗";
    input.classList.remove("shake");
    void input.offsetWidth;
    input.classList.add("shake");
    return;
  }

  error.textContent = "";
  showPage(pages.surprise);
});

// Birthday message modal
const modal = document.getElementById("message-modal");

document.getElementById("reveal-button").addEventListener("click", () => {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
});

document.getElementById("close-message").addEventListener("click", () => {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }
});

// Go to memories
document.getElementById("memory-button").addEventListener("click", () => {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  showPage(pages.memories);
});

// Soft floating hearts
const heartsContainer = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.35 ? "♡" : "♥";

  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 16}px`;
  heart.style.animationDuration = `${7 + Math.random() * 7}s`;
  heart.style.animationDelay = `${Math.random() * 2}s`;

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 15000);
}

setInterval(createHeart, 850);

for (let i = 0; i < 8; i++) {
  setTimeout(createHeart, i * 350);
}
