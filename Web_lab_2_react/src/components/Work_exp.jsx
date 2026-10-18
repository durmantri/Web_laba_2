function Work_experience() {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 transition-all duration-300 hover:shadow-md hover:border-emerald-300">
      <h2 className="text-xl font-bold  text-emerald-900 mb-4 pb-2 border-b border-emerald-50 flex items-center gap-2">
        Досвід роботи
      </h2>
      <h3 className="font-semibold text-slate-800 text-xl">
        Стажер Junior Network Engineer
      </h3>
      <p className="text-xl text-emerald-700  italic mb-3">
        ТОВ "Технології майбутнього" | Червень 2025 – Серпень 2025
      </p>
      <ul className="space-y-2 text-slate-600 text-lg font-medium list-disc pl-5">
        <li>Налаштування корпоративної мережі, створення VLAN.</li>
        <li>Конфігурація мережевого обладнання та тестування з'єднань.</li>
        <li>Діагностика мережевих неполадок та моніторинг вузлів.</li>
      </ul>
    </section>
  );
}
export default Work_experience;
