import { componentStyles } from "./componentStyles";
function Contacts() {
  return (
    <section className={componentStyles.section}>
      <h2 className={componentStyles.h2}>Контакти</h2>

      <div className="space-y-3 text-slate-700 dark:text-slate-300 text-lg">
        {/* Email */}
        <div className={componentStyles.contacts_div}>
          <span className={componentStyles.contacts_span}>Email:</span>
          <a
            href="mailto:dobosh2026@gmail.com"
            className="text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-300 font-medium hover:underline"
          >
            dobosh2026@gmail.com
          </a>
        </div>

        {/* Телефон */}
        <div className={componentStyles.contacts_div}>
          <span className={componentStyles.contacts_span}>Телефон:</span>
          <a
            href="tel:+380501234567"
            className="text-slate-700 dark:text-slate-200 font-medium"
          >
            +380 (50) 123-45-67
          </a>
        </div>

        {/* Місто */}
        <div className={componentStyles.contacts_div}>
          <span className={componentStyles.contacts_span}>Місто:</span>
          <span className="text-slate-700 dark:text-slate-200 font-medium">
            Львів, Україна
          </span>
        </div>

        {/* GitHub */}
        <div className={componentStyles.contacts_div}>
          <span className={componentStyles.contacts_span}>GitHub:</span>
          <a
            href="https://github.com/durmantri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-300 font-medium hover:underline"
          >
            github.com/durmantri
          </a>
        </div>
      </div>
    </section>
  );
}
export default Contacts;
