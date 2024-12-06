import { projects } from "../../data";

import { Card } from "../Card";
import { WorkContainer } from "./styles";

export function Work() {
  return (
    <WorkContainer>
      <h2 id="work">
        Selected <strong>Works</strong>
      </h2>

      <section>
        {projects.map((project, index) => {
          if (index % 2 === 0) {
            return <Card key={index} project={project} />;
          } else {
            return <Card key={index} project={project} flip />;
          }
        })}
      </section>
    </WorkContainer>
  );
}
