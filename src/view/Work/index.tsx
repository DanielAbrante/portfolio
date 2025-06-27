import { works } from "../../data";

import { Card } from "../../components/Card";
import { WorkContainer } from "./styles";

export function Work() {
  return (
    <WorkContainer>
      <h2 id="work">
        Selected <strong>Works</strong>
      </h2>

      <section>
        {works.map((work, index) => {
          if (index % 2 === 0) {
            return <Card key={index} work={work} />;
          } else {
            return <Card key={index} work={work} flip />;
          }
        })}
      </section>
    </WorkContainer>
  );
}
