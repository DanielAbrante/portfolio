import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5rem 0 2.5rem;
`;

export const SocialMedias = styled.div`
  display: flex;
  gap: 4.125rem;
  padding: 3.75rem 0 5rem;

  a {
    color: ${(props) => props.theme["neutral-2"]};
  }

  svg:hover {
    cursor: pointer;
    color: ${(props) => props.theme["neutral-1"]};
  }
`;
