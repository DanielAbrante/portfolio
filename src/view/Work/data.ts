import AthenaEnvBG from "../../assets/works/athena-env-bg.webp"
import BlizzardBG from "../../assets/works/blizzard-bg.webp"

export interface Work {
  title: string;
  description: string;
  link: string;
  img: string;
}

export const works: Work[] = [
  {
    title: "BR Challenge Blizzard",
    description: "Dynamic landing page",
    img: BlizzardBG,
    link: "https://br-challenges-blizzard-blond.vercel.app/",
  },
  {
    title: "AthenaEnv",
    description: "Fanmade documentation",
    img: AthenaEnvBG,
    link: "https://athena-env.vercel.app/",
  },
];
