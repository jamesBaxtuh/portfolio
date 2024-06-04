// External NPM Packages
import {useState} from 'react';

// Utilities and Constants

// Components
import Search from "./Search/Search";
import Filters from "./Filters/Filters";
import Results from "./Results/Results";

const App = () => {
	const [query, setQuery] = useState("");
	const [system, setSystem] = useState("");
	const [activeFilters, setActiveFilters] = useState([]);
	return (
		<section>
			<h1>Visual Studio Code Hotkey Lookup</h1>
			<p>Lookup a shortcut to see its specific hotkey.</p>
			<Search query={query} setQuery={setQuery}/>
			<Filters system={system} setSystem={setSystem} activeFilters={activeFilters} setActiveFilters={setActiveFilters} />
			<Results system={system} query={query} activeFilters={activeFilters}/>
		</section>
	);
};

export default App;
