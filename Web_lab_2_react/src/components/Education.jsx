import { componentStyles } from "./componentStyles";
function Education() {
  return (
    <section className={componentStyles.section}>
      <h2 className={componentStyles.h2}>Освіта</h2>
      <h3 className={componentStyles.h3}>
        Національний університет «Львівська політехніка»
      </h3>
      <p className="text-xl text-emerald-700 dark:text-emerald-400 italic mb-3">
        Бакалавр — Кібербезпека | 2022 – 2026
      </p>
      <p className={componentStyles.p}>
        Поглиблене вивчення алгоритмів, структур даних, реляційних баз даних та
        симуляції комп'ютерних мереж.
      </p>
    </section>
  );
}
export default Education;
