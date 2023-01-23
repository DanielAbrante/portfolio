import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  a {
    margin: 0 auto;
  }
`;

export const Header = styled.div`
  @media (max-width: 768px) {
    justify-content: center;
  }

  display: flex;
  justify-content: flex-end;
  align-items: center;

  height: 6rem;

  ul {
    display: flex;
    gap: 2rem;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;

      height: 2rem;

      position: relative;
      font-weight: 600;
      color: ${(props) => props.theme["neutral-1"]};
    }

    a:hover + span {
      width: 1rem;
      height: 0.3rem;
      background: ${(props) => props.theme["neutral-1"]};

      border-radius: 8px;
    }

    a:hover {
      background: linear-gradient(
        to right,
        ${(props) => props.theme.primary[0]},
        ${(props) => props.theme.primary[1]}
      );
      background-clip: text;

      color: transparent;
      cursor: pointer;
    }
  }
`;

export const HomeTitle = styled.div`
  @media (max-width: 768px) {
    height: 36rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  height: 44rem;

  h1 {
    @media (max-width: 768px) {
      font-size: 2rem;
      line-height: 3.5rem;
    }

    max-width: 63rem;

    font-size: 3.5rem;
    text-align: center;
    line-height: 5.25rem;

    padding: 0 6.5rem;
  }
`;
