import { Card } from "../../components/Card";
import { works } from "./data";
import * as S from "./styles";

export function Personal() {
	return (
		<S.Personal>
			<h2 id="work">
				Personal <strong>Works</strong>
			</h2>

			<section>
				{works.map((work, index) => {
					if (index % 2 === 0) {
						return <Card key={work.title} work={work} />;
					} else {
						return <Card key={work.title} work={work} flip />;
					}
				})}
			</section>
		</S.Personal>
	);
}
