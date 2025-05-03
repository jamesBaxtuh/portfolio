import VisuallyHidden from '../../../../utility/VisuallyHidden';
import './Search.css';

function Search({query, setQuery}) {
    const onChange = (e) => {
        // Sanitize input
        setQuery(e.target.value);
    }
    return (
        <div id='vscodeApp_SearchContainer'>
            <VisuallyHidden>
                <label htmlFor="vscodeApp_Searchbar">Search Hotkeys</label>
            </VisuallyHidden>
            <input type="text" onChange={onChange} value={query} id="vscodeApp_Searchbar" placeholder='Search hotkeys'/>
        </div>
    )
}

export default Search