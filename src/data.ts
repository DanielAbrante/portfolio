import AthenaEnvBG from "./assets/works/athena-env-bg.png"
import BlizzardBG from "./assets/works/blizzard-bg.png"

export interface Work {
  title: string;
  description: string;
  link: string;
  img: string;
}

export const works: Work[] = [
  {
    title: "BR Challenge Blizzard",
    description: "Landing page dinâmica para jogos da Blizzard",
    img: BlizzardBG,
    link: "https://br-challenges-blizzard-blond.vercel.app/",
  },
  {
    title: "AthenaEnv",
    description: "Documentação do ambiente de criar jogos com JS para o PS2",
    img: AthenaEnvBG,
    link: "https://athena-env.vercel.app/",
  },
];
