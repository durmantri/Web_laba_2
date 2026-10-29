import React, { useState, useEffect, useRef } from "react";
import { modalStyles } from "./modalStyles";
function ContactForm() {
  // isOpen у false
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    //isOpen
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  // Перевірки чи потрібно показувати модальне вікно
  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen && !dialogRef.current.open) {
        dialogRef.current.showModal();
      } else if (!isOpen && dialogRef.current.open) {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <dialog ref={dialogRef} className={modalStyles.dialog}>
      <button
        type="button"
        className={modalStyles.closeBtn}
        onClick={closeModal}
      >
        &times;
      </button>

      <h3 className={modalStyles.title}>Зворотний зв'язок</h3>

      <form
        action="https://formspree.io/f/xdeeerdg"
        method="POST"
        className="space-y-4"
      >
        <div>
          <label className="label_text">Ім’я</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Ваше ім'я"
            className={modalStyles.input}
          />
        </div>
        <div>
          <label className="label_text">Номер телефону</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+380..."
            className={modalStyles.input}
          />
        </div>
        <div>
          <label className="label_text">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="example@gmail.com"
            className={modalStyles.input}
          />
        </div>
        <div>
          <label className="label_text">Повідомлення</label>
          <textarea
            name="message"
            rows="3"
            placeholder="Ваше повідомлення..."
            className={modalStyles.text_input}
          ></textarea>
        </div>
        <button type="submit" className={modalStyles.submitBtn}>
          Надіслати
        </button>
      </form>
    </dialog>
  );
}
export default ContactForm;
