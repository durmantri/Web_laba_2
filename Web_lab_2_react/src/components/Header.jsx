export default function Header() {
  return (
    <header className=" p-6 rounded-2xl shadow-sm text-center max-w-xl mx-auto ">
      <h1 className="inline-block mt-3 px-3.5 py-1 bg-emerald-100 text-emerald-900 text-2xl font-bold rounded-full uppercase tracking-tight">
        Добош Богдан Романович
      </h1>
      <p className="text-slate-600 mt-1 font-medium">
        Бажана посада:{" "}
        <span className="text-emerald-700">Junior Network Engineer</span>
      </p>
    </header>
  );
}
