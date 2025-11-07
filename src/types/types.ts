export type Role = "Admin" | "Artist" | "Visitor" | "Curator";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  image: string;
  description: string;
  price?: number;
  style?: string;
  medium?: string;
  period?: string;
  history?: string;
}
