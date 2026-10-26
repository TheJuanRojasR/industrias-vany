export function buildContactMessage(input = {}) {
  const name = String(input.name ?? "").trim();
  const company = String(input.company ?? "").trim();
  const phone = String(input.phone ?? "").trim();
  const email = String(input.email ?? "").trim();
  const interest = String(input.interest ?? "").trim();
  const message = String(input.message ?? "").trim();

  const lines = ["Hola, quisiera hacer una consulta.", "", `Nombre: ${name}`];

  if (company) {
    lines.push(`Empresa: ${company}`);
  }

  lines.push(`Teléfono: ${phone}`);

  if (email) {
    lines.push(`Email: ${email}`);
  }

  if (interest) {
    lines.push(`Interés: ${interest}`);
  }

  lines.push("", "Mensaje:", message);

  return lines.join("\n").trim();
}
