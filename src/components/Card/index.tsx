import { CaretRight } from "phosphor-react";
import { CardButton, CardContainer, CardDetails } from "./styles";

import { ProjectProps } from "../../data";

interface CardProps {
  project: ProjectProps;
  flip?: boolean;
}

export function Card({ flip = false, project }: CardProps) {
  return (
    <CardContainer flip={flip}>
      <div>
        <a target="_blank" href={project.link}><img src={project.img} alt={project.title} /></a>
      </div>

      <CardDetails>
        <h5>{project.title}</h5>
        <h3>{project.description}</h3>

        <CardButton>
          <a target="_blank" href={project.link}>VIEW WORK <CaretRight size={24} /></a>
        </CardButton>
      </CardDetails>
    </CardContainer>
  );
}
