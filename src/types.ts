export interface SideHustle {
  id: string;
  title: string;
  description: string;
  modal: string;
  potensi: string;
  category: string;
}

export interface Post {
  id: string;
  author: string;
  title: string;
  content: string;
  comments: Comment[];
  date: string;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
