import { CaretRight } from "phosphor-react";
import { CardButton, CardContainer, CardDetails } from "./styles";

import { Work } from "../../data";

interface CardProps {
  work: Work;
  flip?: boolean;
}

export function Card({ flip = false, work }: CardProps) {
  return (
    <CardContainer flip={flip}>
      <div>
        <a target="_blank" href={work.link}><img src={work.img} alt={work.title} /></a>
      </div>

      <CardDetails>
        <h5>{work.title}</h5>
        <h3>{work.description}</h3>

        <CardButton>
          <a target="_blank" href={work.link}>VIEW WORK <CaretRight size={24} /></a>
        </CardButton>
      </CardDetails>
    </CardContainer>
  );
}
