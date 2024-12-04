import { AboutContainer, AboutDetails, AboutGallery } from "./styles";

import GitHubProfile from "../../assets/github-profile.png";
import AWSProfile from "../../assets/aws-certified-cloud-practitioner.png";
import LinkedinProfile from "../../assets/linkedin-profile.jpg";

export function About() {
  return (
    <AboutContainer>
      <AboutDetails>
        <h4 id="about">A BIT MORE</h4>
        <p>
          I enjoy <strong>games</strong> (the image beside gives it away :D), <strong>open-source</strong> projects (I've made <small>minimal</small> contributions to a few), and hold two <strong>AWS certifications</strong> (Cloud and AI).
        </p>
      </AboutDetails>

      <AboutGallery>
        <div>
          <img src={LinkedinProfile} alt="Linkedin profile" />
        </div>
        <div>
          <img src={GitHubProfile} alt="GitHub profile" />
          <img src={AWSProfile} alt="Weblate profile" />
        </div>
      </AboutGallery>
    </AboutContainer>
  );
}
