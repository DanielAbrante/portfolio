const images_dir = "/images";
const BASE_URL =
  "https://github.com/DanielAbrante/assets-to-portfolio/blob/main";
const QUERY = "?raw=true";

//https://github.com/DanielAbrante/assets-to-portfolio/blob/main/pong.png?raw=true

export const skills = [
  "typescript",
  "rust",
  "reactts",
  "node",
  "shell",
  "mongo",
  "sqlite",
  "gdscript",
];

export const projects = [
  {
    title: "ToDo Web",
    description: "ToDo Web system to manage all your tasks with login feature",
    url: `${BASE_URL}/todo-web.png${QUERY}`,
    link: "https://github.com/DanielAbrante/todo-web-p3",
  },
  {
    title: "Games Linux",
    description:
      "Command line interface to download games in Linux with .AppImage extension",
    url: `${BASE_URL}/gameslinux.gif${QUERY}`,
    link: "https://github.com/DanielAbrante/GamesLinux",
  },
  {
    title: "Pong",
    description: "Multiplayer game created from scratch using Java",
    url: `${BASE_URL}/pong.png${QUERY}`,
    link: "https://github.com/DanielAbrante/game-pong",
  },
  {
    title: "Tribute Page",
    description: "Biography of Dr. Norman Borlaug",
    url: `${BASE_URL}/tribute-page.gif${QUERY}`,
    link: "https://danielabrante.github.io/tribute-page/",
  },
  {
    title: "Survey Page",
    description: "Survey page to get some informations about the user",
    url: `${BASE_URL}/survey-page.gif${QUERY}`,
    link: "https://danielabrante.github.io/survey-page/",
  },
];

export const contacts = [
  {
    social_media: "github",
    url: "https://github.com/DanielAbrante",
  },
  {
    social_media: "linkedin",
    url: "linkedin.com/in/daniel-abrante-0629a6258",
  },
];
