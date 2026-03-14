import type { Work } from "../../view/Personal/data";
import { CardButton, CardContainer, CardDetails } from "./styles";

interface CardProps {
	work: Work;
	flip?: boolean;
}

export function Card({ flip = false, work }: CardProps) {
	return (
		<CardContainer flip={flip}>
			<div>
				<a target="_blank" href={work.link}>
					<img src={work.img} alt={work.title} />
				</a>
			</div>

			<CardDetails>
				<h3>{work.title}</h3>
				<h5>{work.description}</h5>

				<CardButton>
					<a target="_blank" href={work.link}>
						VIEW WORK
					</a>
				</CardButton>
			</CardDetails>
		</CardContainer>
	);
}
