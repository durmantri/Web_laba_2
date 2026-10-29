import { componentStyles } from "./componentStyles";
function Work_experience() {
  return (
    <section className={componentStyles.section}>
      <h2 className={componentStyles.h2}>Досвід роботи</h2>
      <h3 className={componentStyles.h3}>Стажер Junior Network Engineer</h3>
      <p className="text-xl text-emerald-700 dark:text-emerald-400 italic mb-3">
        ТОВ "Технології майбутнього" | Червень 2025 – Серпень 2025
      </p>
      <ul className={componentStyles.li_work}>
        <li>Налаштування корпоративної мережі, створення VLAN.</li>
        <li>Конфігурація мережевого обладнання та тестування з'єднань.</li>
        <li>Діагностика мережевих неполадок та моніторинг вузлів.</li>
      </ul>
    </section>
  );
}
export default Work_experience;
