/**
 * 
 */
export type ContactLink = {
  /** Type of link */ 
  kind: "link" | "email" | "phone"
/**  */
  name: string
  /**  */
  text: string
  /** */
  link: string
}

