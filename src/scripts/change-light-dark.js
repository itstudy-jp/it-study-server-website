const darkModeToggles = document.querySelectorAll(".dark-mode-toggle");
const root = document.documentElement;

// ローカルストレージからダークモードの設定を読み込む
if (localStorage.getItem("darkMode") === "enable") {
  root.classList.add("dark-mode");
}

// ダークモードの切り替え
darkModeToggles.forEach((darkModeToggle) => {
  darkModeToggle.addEventListener("click", () => {
    root.classList.toggle("dark-mode");

    if (root.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enable");
    } else {
      localStorage.removeItem("darkMode");
    }
      darkModeToggles.forEach((darkModeToggle) => {
    const modeIcon = darkModeToggle.querySelector(".mode-icon");
    if (root.classList.contains("dark-mode")) {
      modeIcon.textContent = "☽";
      modeIcon.style.color = "white";
    } else {
      modeIcon.textContent = "☀";
      modeIcon.style.color = "inherit";
    }
  });
  });
});