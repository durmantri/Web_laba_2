function Contacts() {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 transition-all duration-300 hover:shadow-md hover:border-emerald-300">
      <h2 className="text-xl font-bold text-emerald-900 mb-4 pb-2 border-b border-emerald-50 flex items-center gap-2">
        Контакти
      </h2>

      <div className="space-y-3 text-slate-700 text-xl">
        <div className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-50/40 ">
          <span className="text-emerald-700 font-semibold min-w-[80px]">
            Email:
          </span>
          <a className="text-emerald-800  font-medium">dobosh2026@gmail.com</a>
        </div>
        <div className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-50/40 ">
          <span className="text-emerald-700 font-semibold min-w-[80px]">
            Телефон:
          </span>
          <a className="text-slate-700 font-medium">+380 (50) 123-45-67</a>
        </div>
        <div className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-50/40 ">
          <span className="text-emerald-700 font-semibold min-w-[80px]">
            Місто:
          </span>
          <span className="text-slate-700 font-medium">Львів, Україна</span>
        </div>
        <div className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-50/40 ">
          <span className="text-emerald-700 font-semibold min-w-[80px]">
            GitHub:
          </span>
          <a
            href="https://github.com/durmantri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 hover:text-emerald-900 font-medium hover:underline"
          >
            github.com/durmantri
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
