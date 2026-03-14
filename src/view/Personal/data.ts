import AthenaEnvBG from "../../assets/works/athena-env-bg.webp";
import BlizzardBG from "../../assets/works/blizzard-bg.webp";

export interface Work {
	title: string;
	description: string;
	link: string;
	img: string;
}

export const works: Work[] = [
	{
		title: "AthenaEnv Website",
		description:
			"Fanmade documentation to AthenaEnv: a JavaScript environment to develop PS2 Games",
		img: AthenaEnvBG,
		link: "https://athena-env.vercel.app/",
	},
	{
		title: "BR Challenge Blizzard",
		description:
			"Dynamic landing page focused on delivering a strong visual first impression.",
		img: BlizzardBG,
		link: "https://br-challenges-blizzard-blond.vercel.app/",
	},
];
