import React, { useState, useEffect } from "react";

function ThemeChange() {
  const [theme, setTheme] = useState("light");

  // перемикання теми
  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 7 && currentHour < 21) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // перемикання кнопкою
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-xl bg dark:text-slate-100 font-medium transition-colors cursor-pointer"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}
export default ThemeChange;
