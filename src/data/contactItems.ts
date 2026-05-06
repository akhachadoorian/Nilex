import type { ContactLink } from "../types/contact"

export const contactItems = [
  {
    kind: "phone",
    name: "Mark's Phone",
    text: "(251) 458-9718",
    link: "tel:2514589718"
  },
  {
    kind: "email",
    name: "Mark's Email",
    text: "mark@nilexindustrical.com",
    link: "mailto:mark@nilexindustrical.com"
  },
] satisfies ContactLink[];