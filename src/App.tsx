import { AppContainer } from "./styles";

import { Home } from "./components/Home";
import { Technology } from "./components/Technology";
import { Work } from "./components/Work";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <AppContainer>
      <Home />
      <Work />
      <Technology />
      <Footer />
    </AppContainer>
  );
}
