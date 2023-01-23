import { Icon } from "@iconify/react";
import { FooterContainer, SocialMedias } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <h2 id="test">
        Get <strong>In Touch.</strong>
      </h2>

      <p>So that we can talk more about...</p>

      <SocialMedias>
        <a
          href="https://www.linkedin.com/in/daniel-abrante-0629a6258/"
          target="_blank"
        >
          <Icon icon="mdi:linkedin" width="48" height="48" />
        </a>
        <a href="https://github.com/DanielAbrante" target="_blank">
          <Icon icon="mdi:github" width="48" height="48" />
        </a>
      </SocialMedias>
    </FooterContainer>
  );
}
