// External NPM Packages
import {useState} from "react";
import "./App.css"

// Utilities and Constants

// Components
import Search from "./Search/Search";
import Filters from "./Filters/Filters";
import Results from "./Results/Results";
import System from "./System/System";

const App = () => {
	const [query, setQuery] = useState("");
	const [system, setSystem] = useState("");
	const [activeFilters, setActiveFilters] = useState([]);
	return (
		<section id="vscodeApp_AppContainer">
			<h1 id="vscodeApp_AppTitle">Visual Studio Code Hotkey Lookup</h1>
			<Search query={query} setQuery={setQuery}/>
			<System system={system} setSystem={setSystem}/>
			<Filters system={system} setSystem={setSystem} activeFilters={activeFilters} setActiveFilters={setActiveFilters} />
			<Results system={system} query={query} activeFilters={activeFilters}/>
		</section>
	);
};

export default App;
