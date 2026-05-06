/** A contact email address */
export type ContactEmail = {
  /** Discriminant — always `'email'` */
  kind: 'email',
  /** Internal/back-end label for this entry */
  name?: string,
  /** The raw email address, e.g. `mark@nilexindustrial.com` */
  email: string,
  /**
   * `mailto:` URI derived from `email`.
   * @example
   * get link() { return `mailto:${this.email}`; }
   */
  link: `mailto:${string}`,
  /** Button or anchor label shown to the user */
  cta: string,
}

/** A contact phone number */
export type ContactPhone = {
  /** Discriminant — always `'phone'` */
  kind: 'phone',
  /** Internal/back-end label for this entry */
  name?: string,
  /** The raw phone number, e.g. `2514589718` */
  phone: string,
  /**
   * `tel:` URI derived from `phone` with formatting stripped.
   * @example
   * get link() { return `tel:${this.phone.replace(/[\s().+-]/g, '')}`; }
   */
  link: `tel:${string}`,
  /** Button or anchor label shown to the user */
  cta: string,
}

/** A generic labelled hyperlink */
export type ContactLink = {
  /** Discriminant — always `'link'` */
  kind: "link"
  /** Internal/back-end label for this entry */
  name: string
  /** Destination URL */
  link: string
  /** Button or anchor label shown to the user */
  cta: string,
}

/** Union of all contact item shapes, discriminated by `kind` */
export type ContactItem = ContactEmail | ContactPhone | ContactLink
