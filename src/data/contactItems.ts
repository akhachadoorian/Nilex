import type { ContactEmail, ContactItem, ContactPhone } from "../types/contact"

/** Mark's email address. `link` is derived automatically from `email`. */
const email: ContactEmail = {
  kind: 'email',
  email: "mark@nilexindustrical.com",
  get link() { return `mailto:${this.email}` as `mailto:${string}`; },
  cta: "Send an Email",
};

/** Mark's phone number. `link` strips formatting from `phone` before building the `tel:` URI. */
const phone: ContactPhone = {
  kind: "phone",
  name: "Mark's Phone",
  phone: "(251) 458-9718",
  get link() { return `tel:${this.phone.replace(/[\s().+-]/g, '')}` as `tel:${string}`; },
  cta: "Give Us a Call",
};

/** All contact items used across the site. */
export const contactItems: ContactItem[] = [phone, email];
