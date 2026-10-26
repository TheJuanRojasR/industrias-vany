export interface ContactMessageInput {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  interest?: string;
  message?: string;
}

export function buildContactMessage(input?: ContactMessageInput): string;
