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
  {
    id: 2,
    title: "Tribute Page",
    description: "Biography about Dr. Norman Borlaug ",
    img: `${BASE_URL_TO_IMAGES}/tribute-page.png`,
    link: "https://danielabrante.github.io/tribute-page/",
  },
  {
    id: 3,
    title: "Todo App",
    description: "A todo app to manage tasks",
    img: `${BASE_URL_TO_IMAGES}/todo-app.png`,
    link: "https://github.com/DanielAbrante/todo-web-p3",
  },
];
