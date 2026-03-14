import { Icon } from "@iconify/react";
import * as S from "./styles";

export function Contact() {
	return (
		<S.Contact id="contact">
			<h2 id="test">
				Get <strong>In Touch.</strong>
			</h2>

			<S.SocialMedias>
				<a
					href="https://www.linkedin.com/in/daniel-martins-abrante/"
					target="_blank"
					rel="noopener"
				>
					<Icon icon="mdi:linkedin" width="48" height="48" />
				</a>
				<a
					href="https://github.com/DanielAbrante"
					target="_blank"
					rel="noopener"
				>
					<Icon icon="mdi:github" width="48" height="48" />
				</a>
			</S.SocialMedias>
		</S.Contact>
	);
}
