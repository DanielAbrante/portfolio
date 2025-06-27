import { AppContainer } from "./styles";

import { Home } from "./view/Home";
import { Technology } from "./view/Technology";
import { Work } from "./view/Work";
import { Footer } from "./view/Footer";

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
