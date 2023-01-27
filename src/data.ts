import RocketNotes from "./assets/rocketnotes.png";
import Feed from "./assets/feed.png";
import TributePage from "./assets/tribute-page.png";
import TodoApp from "./assets/todo-app.png";

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
    img: RocketNotes,
    link: "https://rocket-notes-one.vercel.app/",
  },
  {
    id: 1,
    title: "Feed",
    description: "Social media comment section",
    img: Feed,
    link: "https://feed-snowy-ten.vercel.app/",
  },
  {
    id: 2,
    title: "Tribute Page",
    description: "Biography about Dr. Norman Borlaug ",
    img: TributePage,
    link: "https://danielabrante.github.io/tribute-page/",
  },
  {
    id: 3,
    title: "Todo App",
    description: "A todo app to manage tasks",
    img: TodoApp,
    link: "https://github.com/DanielAbrante/todo-web-p3",
  },
];
