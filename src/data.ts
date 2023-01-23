const BASE_URL_TO_IMAGES = "./src/assets";

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  link: string;
  img: string;
}

export const projects: ProjectProps[] = [
  {
    id: 0,
    title: "Rocketnotes",
    description: "A app to manage your notes",
    img: `${BASE_URL_TO_IMAGES}/rocketnotes.png`,
    link: "",
  },
  {
    id: 1,
    title: "Feed",
    description: "Social media comment section",
    img: `${BASE_URL_TO_IMAGES}/feed.png`,
    link: "",
  },
];

export const tools: Object[] = [];
