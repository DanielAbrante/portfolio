import { CaretDown } from "phosphor-react";
import { Header, HomeContainer, HomeTitle, CaretContainer } from "./styles";

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
          <strong>Web Applications</strong> crafted by a <br />
          <strong>Frontend Developer</strong> to meet your <br />
          <strong>Unique Needs</strong>
        </h1>
      </HomeTitle>

      <CaretContainer>
        <a href="#work">
          <CaretDown size={40} />
        </a>
      </CaretContainer>
    </HomeContainer>
  );
}
