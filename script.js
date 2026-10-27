//Збір даних системи
const systemInfo = {
  platform: navigator.platform,
  deviceMemory: navigator.deviceMemory,
  userAgent: navigator.userAgent,
  language: navigator.language,
  cookieEnabled: navigator.cookieEnabled,
  savedAt: new Date().toLocaleString(),
};
//Збереження в localstorage, читання
localStorage.setItem("userSystemInfo", JSON.stringify(systemInfo));
const storedData = localStorage.getItem("userSystemInfo");
const footerElement = document.getElementById("footer");
//парсинг json-а і вивід інфи
if (storedData && footerElement) {
  const info = JSON.parse(storedData);
  footerElement.innerHTML = `
          <strong>Інформація про систему:</strong><br>
          <span>ОС: ${info.platform}</span> | 
          <span>Браузер: ${info.userAgent}</span> |
          <span>Мова: ${info.language}</span> |
          <span>Пам'ять пристрою: ${info.deviceMemory}</span> |
          <span>cookie: ${info.cookieEnabled}</span>
        `;
}

//Формування форми для надсилання
fetch("https://jsonplaceholder.typicode.com/posts/6/comments")
  .then((response) => response.json())
  .then((comments) => {
    const container = document.getElementById("comments-container");
    comments.forEach((comment) => {
      const commentDiv = document.createElement("div");
      commentDiv.className = "comment-card";
      commentDiv.innerHTML = `
              <strong>${comment.name}</strong>
              <div class="comment-email">${comment.email}</div>
              <div class="comment-body">${comment.body}</div>
            `;
      container.appendChild(commentDiv);
    });
  })
  .catch((error) => console.error("Error:", error));

const feedbackModal = document.getElementById("feedback-modal");
const closeModalBtn = document.getElementById("close-modal");
//таймер появи модального вікна
setTimeout(() => {
  if (feedbackModal) {
    feedbackModal.classList.remove("hidden");
  }
}, 60000);
//кнопка закриття вікна
if (closeModalBtn) {
  closeModalBtn.addEventListener("click", () => {
    feedbackModal.classList.add("hidden");
  });
}

//Зміна теми
const themeToggleButton = document.getElementById("theme-btn");
const htmlElement = document.documentElement;

//зміна іконки кнопки зміни теми
function setTheme(isDark) {
  if (isDark) {
    htmlElement.classList.add("dark");
    if (themeToggleButton) themeToggleButton.innerText = "☀️";
  } else {
    htmlElement.classList.remove("dark");
    if (themeToggleButton) themeToggleButton.innerText = "🌙";
  }
}
//Авто встановлення темної теми не в денний час
const savedTheme = localStorage.getItem("userTheme");

if (savedTheme !== null) {
  setTheme(savedTheme === "dark");
} else {
  const currentHour = new Date().getHours();
  const isDayTime = currentHour >= 7 && currentHour < 21;
  setTheme(!isDayTime);
}
//Встановлення теми при настиканні кнопки
if (themeToggleButton) {
  themeToggleButton.addEventListener("click", () => {
    const isCurrentlyDark = htmlElement.classList.contains("dark");
    const newThemeIsDark = !isCurrentlyDark;
    setTheme(newThemeIsDark);
    localStorage.setItem("userTheme", newThemeIsDark ? "dark" : "light");
  });
}
