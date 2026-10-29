import { componentStyles } from "./componentStyles";
function Skills() {
  return (
    <section className={componentStyles.section}>
      <h2 className={componentStyles.h2}>Навички</h2>
      <ul className={componentStyles.ul}>
        <li className={componentStyles.li_skills}>
          <strong>Мережеві технології:</strong> TCP/IP, Cisco Packet Tracer,
          VLAN, статична маршрутизація
        </li>
        <li className={componentStyles.li_skills}>
          <strong>Мови програмування:</strong> Python, HTML, CSS
        </li>
        <li className={componentStyles.li_skills}>
          <strong>Технології та фреймворки:</strong> Git, GitHub, VS Code
        </li>
        <li className={componentStyles.li_skills}>
          <strong>Операційні системи:</strong> Windows, Linux
        </li>
        <li className={componentStyles.li_skills}>
          <strong>Мови:</strong> Українська (рідна), Англійська (Intermediate)
        </li>
      </ul>
    </section>
  );
}

export default Skills;
