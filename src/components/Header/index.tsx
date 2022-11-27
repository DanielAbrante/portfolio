import "./style.css";
import { Switch } from "@mui/material";

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <a href="#about"><li>About</li></a>
          <a href="#skills"><li>Skills</li></a>
          <a href="#projects"><li>Projects</li></a>
          <a href="#contacts"><li>Contacts</li></a>
        </ul>
      </nav>
      <hr />
    </header>
  );
}
