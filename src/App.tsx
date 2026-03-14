import { AppContainer } from "./styles";
import { Contact } from "./view/Contact";
import { Header } from "./view/Header";
import { Personal } from "./view/Personal";

export function App() {
	return (
		<AppContainer>
			<Header />
			<Personal />
			<Contact />
		</AppContainer>
	);
}
