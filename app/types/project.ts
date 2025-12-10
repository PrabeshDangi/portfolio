export interface Project {
  slug: string;
  title: string;
  description: string;
  details: string[];
  date: string;
  tags: string[];
  image?: string;
  github?: string;
  link?: string;
}
