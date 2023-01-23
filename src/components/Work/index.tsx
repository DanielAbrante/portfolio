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
        {projects.map((project) => {
          if (project.id % 2 === 0) {
            return <Card key={project.id} project={project} />;
          } else {
            return <Card key={project.id} project={project} flip />;
          }
        })}
      </section>
    </WorkContainer>
  );
}
