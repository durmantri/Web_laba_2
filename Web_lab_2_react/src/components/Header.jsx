function Header() {
  return (
    <header className="p-6 rounded-2xl shadow-sm text-center bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100  max-w-xl mx-auto">
      <h1 className="inline-block mt-3 px-3.5 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 text-2xl font-bold rounded-full uppercase tracking-tight">
        Добош Богдан Романович
      </h1>
      <p className="text-slate-600 dark:text-slate-300 mt-1 font-medium">
        Бажана посада:{" "}
        <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
          Junior Network Engineer
        </span>
      </p>
    </header>
  );
}
export default Header;
