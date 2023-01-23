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
        <img src={project.img} alt={project.title} />
      </div>

      <CardDetails>
        <h5>{project.title}</h5>
        <h3>{project.description}</h3>

        <CardButton>
          VIEW WORK <CaretRight size={24} />
        </CardButton>
      </CardDetails>
    </CardContainer>
  );
}
