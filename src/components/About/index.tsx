import { AboutContainer, AboutDetails, AboutGallery } from "./styles";

import GitHubProfile from "../../assets/github-profile.png";
import WeblateProfile from "../../assets/weblate-profile.png";
import LinkedinProfile from "../../assets/linkedin-profile.jpeg";

export function About() {
  return (
    <AboutContainer>
      <AboutDetails>
        <h4 id="about">A BIT MORE</h4>
        <p>
          Sometimes I'm contributing with <strong>open source</strong> projects
          with <strong>code</strong> and <strong>translations</strong>, checkout
          my <strong>GitHub</strong> profile below to see details about this and
          another projects!
        </p>
      </AboutDetails>

      <AboutGallery>
        <div>
          <img src={LinkedinProfile} alt="Linkedin profile" />
        </div>
        <div>
          <img src={GitHubProfile} alt="GitHub profile" />
          <img src={WeblateProfile} alt="Weblate profile" />
        </div>
      </AboutGallery>
    </AboutContainer>
  );
}
