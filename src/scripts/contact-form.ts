import { buildContactMessage } from "../lib/contact-message.mjs";

const form = document.querySelector<HTMLFormElement>("[data-contact-form]");

if (form) {
  const status = document.querySelector<HTMLElement>("[data-contact-status]");
  const number = (form.dataset.whatsappNumber ?? "").replace(/\D/g, "");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (number.length < 8) {
      if (status) {
        status.textContent = "El envío por WhatsApp se habilitará cuando se configure el número.";
      }
      return;
    }

    const data = new FormData(form);
    const message = buildContactMessage({
      name: String(data.get("name") ?? ""),
      company: String(data.get("company") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      interest: String(data.get("interest") ?? ""),
      message: String(data.get("message") ?? ""),
    });
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");

    if (status) {
      status.textContent = "Abriendo WhatsApp...";
    }
  });
}
