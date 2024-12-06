import RocketNotes from "./assets/works/rocketnotes.png";
import Feed from "./assets/works/feed.png";
import TributePage from "./assets/works/tribute-page.png";
import TodoApp from "./assets/works/todo-app.png";
import AthenaEnv from "./assets/works/athena-env.png"
import CalculatorApp from "./assets/works/calculator-app.png"

export interface ProjectProps {
  title: string;
  description: string;
  link: string;
  img: string;
}

export const projects: ProjectProps[] = [
  {
    title: "AthenaEnv Website",
    description: "AthenaEnv documentation",
    img: AthenaEnv,
    link: "https://athena-env.vercel.app/",
  },
  {
    title: "Calculator app",
    description: "A cute calculator app",
    img: CalculatorApp,
    link: "https://calculator-app-iota-one.vercel.app/",
  },
  {
    title: "Tribute Page",
    description: "Biography about Dr. Norman Borlaug ",
    img: TributePage,
    link: "https://danielabrante.github.io/tribute-page/",
  },
  {
    title: "Rocketnotes",
    description: "A app to manage your notes",
    img: RocketNotes,
    link: "https://rocket-notes-one.vercel.app/",
  },
  {
    title: "Feed",
    description: "Social media comment section",
    img: Feed,
    link: "https://feed-snowy-ten.vercel.app/",
  },
];
