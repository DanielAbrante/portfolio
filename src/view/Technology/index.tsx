import { SkillContainer, TechnologyContainer } from "./styles";

import { Icon } from "@iconify/react";

export function Technology() {
  return (
    <TechnologyContainer>
      <h2 id="tools">
        Technical <strong>Skills</strong>
      </h2>

      <div>
        <SkillContainer>
          <Icon icon="vscode-icons:file-type-html" />
          <h3>HTML</h3>
        </SkillContainer>
        <SkillContainer>
          <Icon icon="vscode-icons:file-type-css" />
          <h3>CSS</h3>
        </SkillContainer>
        <SkillContainer>
          <Icon icon="vscode-icons:file-type-js" />
          <h3>JavaScript</h3>
        </SkillContainer>
        <SkillContainer>
          <Icon icon="vscode-icons:file-type-typescript" />
          <h3>Typescript</h3>
        </SkillContainer>
        <SkillContainer>
          <Icon icon="vscode-icons:file-type-reactjs" />
          <h3>React</h3>
        </SkillContainer>
        <SkillContainer>
          <Icon icon="vscode-icons:file-type-next" />
          <h3>Next</h3>
        </SkillContainer>
        <SkillContainer>
          <Icon icon="vscode-icons:file-type-styled" />
          <h3>Styled Comp.</h3>
        </SkillContainer>
        <SkillContainer>
          <Icon icon="vscode-icons:file-type-tailwind" />
          <h3>Tailwind</h3>
        </SkillContainer>
        <SkillContainer>
          <Icon icon="vscode-icons:file-type-scss" />
          <h3>SCSS</h3>
        </SkillContainer>
        <SkillContainer>
          <Icon icon="vscode-icons:file-type-jest" />
          <h3>JEST</h3>
        </SkillContainer>

      </div>
    </TechnologyContainer>
  );
}
