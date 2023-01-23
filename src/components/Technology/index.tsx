import { TechnologyContainer } from "./styles";

import { Icon } from "@iconify/react";

export function Technology() {
  return (
    <TechnologyContainer>
      <h2 id="tools">
        Some of <strong>Tools</strong> that I've used <br />
        in my <strong>Projects</strong>
      </h2>

      <div>
        <Icon icon="vscode-icons:file-type-html" />
        <Icon icon="vscode-icons:file-type-css" />
        <Icon icon="vscode-icons:file-type-typescript" />
        <Icon icon="vscode-icons:file-type-git" />
        <Icon icon="vscode-icons:file-type-shell" />
        <Icon icon="vscode-icons:file-type-reactjs" />
        <Icon icon="vscode-icons:file-type-styled" />
      </div>
    </TechnologyContainer>
  );
}
