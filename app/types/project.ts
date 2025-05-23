export interface Project {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
}
