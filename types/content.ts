export interface Content {
  id: number;
  slug: string;
  title: string;
  description: string;
  detail: string;
  author: string;
  created_at: string; // ISO 8601 format
  updated_at: string;
  image: string;
  category: string;
  tags: string[];
  views: number;
  status: "published" | "draft";
}