import { CaretDown } from "phosphor-react";
import { Header, HomeContainer, HomeTitle } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Header>
        <nav>
          <ul>
            <li>
              <a href="#work">WORK</a>
              <span></span>
            </li>
            <li>
              <a href="#tools">TOOLS</a>
              <span></span>
            </li>
            <li>
              <a href="#about">ABOUT</a>
              <span></span>
            </li>
          </ul>
        </nav>
      </Header>

      <HomeTitle>
        <h1>
          I'm <strong>Frontend Developer</strong> that <br />
          build <strong>Web Applications</strong> and <strong>Websites.</strong>
        </h1>
      </HomeTitle>

      <a href="#work">
        <CaretDown size={40} />
      </a>
    </HomeContainer>
  );
}
