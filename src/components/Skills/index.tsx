import "./style.css";
import { skills } from "../../data";
import { Icon } from "@iconify/react";

export function Skills() {
  return (
    <div id="skills">
      <h2>Skills</h2>
      <section className="icons">
        {skills.map((skill) => (
          <div className="item-container">
            <Icon
              className="item"
              icon={`vscode-icons:file-type-${skill}`}
              width="128"
              height="128"
            />
            <legend>{skill}</legend>
          </div>
        ))}
      </section>
    </div>
  );
}
