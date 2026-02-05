type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  overview: string[];
  keyFeatures: string[];
  challengesAndSolutions?: string[];
  outcomesAndResults?: string[];
  liveUrl: string;
  repoUrl: string;
  images: string[];
}

type ModalErrorState = {
  open: boolean;
  title: string;
  message: string;
}
