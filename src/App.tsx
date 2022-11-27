import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contacts } from "./components/Contacts";

export function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </main>
    </>
  );
}
