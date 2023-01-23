import styled from "styled-components";

export const TechnologyContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;

  margin: 5rem 0 8.125rem;

  h2 {
    @media (max-width: 768px) {
      font-size: 2rem;
      line-height: 3.5rem;
      max-width: 100%;
    }
  }

  div {
    @media (max-width: 768px) {
      justify-content: center;
      flex-wrap: wrap;
    }

    display: flex;
    gap: 5rem;

    svg {
      filter: grayscale(1);
      cursor: pointer;

      min-width: 4rem;
      min-height: 4rem;
    }

    svg:hover {
      filter: grayscale(0);
    }
  }
`;
