import styled from "styled-components";

export const AboutContainer = styled.section`
  @media (max-width: 786px) {
    margin: 0;
    flex-direction: column;
  }

  display: flex;
  gap: 2.125;

  div {
    @media (max-width: 786px) {
      max-width: 100%;
    }

    max-width: 50%;
  }
`;

export const AboutDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  h4 {
    @media (max-width: 786px) {
      line-height: 2rem;
    }

    color: ${(props) => props.theme["neutral-1"]};

    font-weight: 600;
    font-size: 24px;
    letter-spacing: 0.06em;
  }

  p {
    @media (max-width: 786px) {
      width: 100%;
      font-size: 1.5rem;
      line-height: 2rem;
    }

    width: 90%;
    font-size: 2rem;
    font-weight: 300;
    line-height: 3rem;
  }
`;

export const AboutGallery = styled.div`
  display: flex;
  gap: 2rem;

  img {
    max-width: 100%;
    max-height: 23rem;
    border-radius: 16px;
    object-fit: cover;
  }

  > div:nth-child(1) {
    max-width: 50%;
    display: flex;
    align-items: center;
  }

  > div:nth-child(2) {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.1rem 0;
  }
`;
