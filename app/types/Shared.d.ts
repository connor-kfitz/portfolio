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
}

type ModalErrorState = {
  open: boolean;
  title: string;
  message: string;
}
