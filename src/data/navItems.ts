import type { NavItem } from "../types/navigation"

/**
 * Top level navigation items rendered in the desktop and mobile nav.
 *
 * Add new routes here — no changes needed in the Navigation component.
 * Use `kind: "link"` for direct routes, `kind: "dropdown"` for items
 * with child links.
 *
 * @see {@link NavItem} for the full type definition
 */
export const NAV_ITEMS = [
  { kind: "link" as const, text: "about", link: "/#about" },
  { kind: "link" as const, text: "products", link: "/#products" },
  { kind: "link" as const, text: "contact", link: "/#contact" },
] satisfies NavItem[]