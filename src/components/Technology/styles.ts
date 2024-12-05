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

  > div {
    @media (max-width: 768px) {
      justify-content: space-around;
      flex-wrap: wrap;
    }

    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    svg {
      min-width: 4rem;
      min-height: 4rem;
    }
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  filter: grayscale(1);

  :hover {
    cursor: pointer;

    filter: grayscale(0);
    color: white;
  }

  h3 {
    text-align: center;
  }
`;