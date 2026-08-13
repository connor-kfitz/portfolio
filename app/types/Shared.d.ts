type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  overview: string[];
  keyFeatures: string[];
  challenges?: string[];
  outcomes?: string[];
  liveUrl: string;
  repoUrl: string;
  images: string[];
  featured?: boolean;
}

type Recipe = {
  id: string;
  name: string;
  prepTime: string;
  cookTime: string;
  ingredients: string[];
  instructions: string[];
  images: string[];
}

type ModalErrorState = {
  open: boolean;
  title: string;
  message: string;
}

type NavLink = {
  name: string;
  href: string;
}
