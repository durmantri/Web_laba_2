function Skills() {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 transition-all duration-300 hover:shadow-md hover:border-emerald-300">
      <h2 className="text-xl font-bold  text-emerald-900 mb-4 pb-2 border-b border-emerald-50 flex items-center gap-2">
        Навички
      </h2>
      <ul className="space-y-3 text-slate-700">
        <li className="inline-block max-w-350px px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-lg font-medium">
          <strong>Мережеві технології:</strong> TCP/IP, Cisco Packet Tracer,
          VLAN, статична маршрутизація
        </li>
        <li className="inline-block max-w-350px px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-lg font-medium">
          <strong>Мови програмування:</strong> Python, HTML, CSS
        </li>
        <li className="inline-block max-w-350px px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-lg font-medium">
          <strong>Технології та фреймворки:</strong> Git, GitHub, VS Code
        </li>
        <li className="inline-block max-w-350px px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-lg font-medium">
          <strong>Операційні системи:</strong> Windows, Linux
        </li>
        <li className="inline-block max-w-350px px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-lg font-medium">
          <strong>Мови:</strong> Українська (рідна), Англійська (Intermediate)
        </li>
      </ul>
    </section>
  );
}
export default Skills;
