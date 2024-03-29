import "./App.css";
import { About } from "./components/About";
import Home from "./components/Home";
import { SoftSkills } from "./components/SoftSkills";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="app">
			<Home />
			<About />
			<SoftSkills />
			<Skills />
			<Certificates/>
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
