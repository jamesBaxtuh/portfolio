import VisuallyHidden from '../../../../utility/VisuallyHidden';

function Search({query, setQuery}) {
    const onChange = (e) => {
        // Sanitize input

        setQuery(e.target.value);
    }
    return (
        <>
            <VisuallyHidden>
                <label htmlFor="hotKeySearch">Search Hotkeys</label>
            </VisuallyHidden>
            <input type="text" onChange={onChange} value={query} id="hotKeySearch"/>
        </>
    )
}

export default Search