import styled from "styled-components";

interface CardContainerProps {
  flip: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  :hover {
    color: white;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  display: flex;
  flex-direction: ${({ flip }) => (flip ? "row-reverse" : "row")};
  gap: 2rem;
  max-width: 1220px;

  filter: grayscale(1);
  
  :hover {
    filter: grayscale(0);
  }

  div {
    @media (max-width: 768px) {
      width: 100%;
    }

    border-radius: 16px;
    width: 50%;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    cursor: pointer;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.05);
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;

  h3 {
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    font-size: 2rem;
    font-weight: 300;
    line-height: 3rem;
  }

  h5 {
    font-size: 1rem;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.04em;
  }

  span {
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }

  a {
    font-size: 1.125rem;
    font-weight: 300;
    line-height: 1.75rem;
  }
`;

export const CardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme["neutral-1"]};
  background: transparent;

  padding: 0.5rem 1rem;
  margin-top: 2rem;
  border: 1px solid ${(props) => props.theme["neutral-2"]};
  border-radius: 24px;

  transition: 0.5s padding;

  :hover {
    background: linear-gradient(
      to right,
      ${(props) => props.theme.primary[0]},
      ${(props) => props.theme.primary[1]}
    );
    cursor: pointer;
    padding: 0.5rem 1.75rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0.04em;
  }
`;
