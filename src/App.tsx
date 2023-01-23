import { AppContainer } from "./styles";

import { Home } from "./components/Home";
import { Technology } from "./components/Technology";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <AppContainer>
      <Home />
      <Technology />
      <Work />
      <About />
      <Footer />
    </AppContainer>
  );
}
