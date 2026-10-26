import assert from "node:assert/strict";
import test from "node:test";
import { buildContactMessage } from "../src/lib/contact-message.mjs";

test("includes the required contact details", () => {
  const message = buildContactMessage({
    name: "Ana Pérez",
    phone: "300 123 4567",
    message: "Quisiera cotizar una nevera.",
  });

  assert.match(message, /Nombre: Ana Pérez/);
  assert.match(message, /Teléfono: 300 123 4567/);
  assert.match(message, /Mensaje:\nQuisiera cotizar una nevera\./);
});

test("includes optional details when present", () => {
  const message = buildContactMessage({
    name: "Ana Pérez",
    company: "Cocina Central",
    phone: "300 123 4567",
    email: "ana@example.com",
    interest: "Mantenimiento",
    message: "Necesito coordinar una visita.",
  });

  assert.match(message, /Empresa: Cocina Central/);
  assert.match(message, /Email: ana@example\.com/);
  assert.match(message, /Interés: Mantenimiento/);
});

test("omits empty optional details", () => {
  const message = buildContactMessage({
    name: "Ana Pérez",
    company: "",
    phone: "300 123 4567",
    email: "",
    interest: "",
    message: "Consulta general.",
  });

  assert.doesNotMatch(message, /Empresa:/);
  assert.doesNotMatch(message, /Email:/);
  assert.doesNotMatch(message, /Interés:/);
});

test("trims whitespace from all fields", () => {
  const message = buildContactMessage({
    name: "  Ana Pérez  ",
    phone: "  300 123 4567  ",
    message: "  Hola.  ",
  });

  assert.match(message, /Nombre: Ana Pérez/);
  assert.match(message, /Teléfono: 300 123 4567/);
  assert.match(message, /Mensaje:\nHola\./);
});
