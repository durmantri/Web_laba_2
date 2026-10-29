import { componentStyles } from "./componentStyles";
function About_me() {
  return (
    <section className={componentStyles.section}>
      <h2 className={componentStyles.h2}>Про мене </h2>
      <p className={componentStyles.p}>
        Мотивований фахівець із базовими знаннями конфігурації комп'ютерних
        мереж, маршрутизації та комутації. Маю профільну освіту в галузі
        кібербезпеки, розумію принципи безпеки мережних інфраструктур та прагну
        розвиватися у сфері адміністрування мереж.
      </p>
    </section>
  );
}
export default About_me;
