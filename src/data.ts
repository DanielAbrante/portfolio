const BASE_URL_TO_IMAGES = "../src/assets";

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
    link: "https://rocket-notes-one.vercel.app/",
  },
  {
    id: 1,
    title: "Feed",
    description: "Social media comment section",
    img: `${BASE_URL_TO_IMAGES}/feed.png`,
    link: "https://feed-snowy-ten.vercel.app/",
  },
];