// External NPM packages
import {useState, useMemo} from 'react';

// Utilities and Constants
import { filteredHotkeys, masterHotkeyList, filterIcons } from '../../../../../data/content/projects/VsCode/vsCode';

// Components
import Shortcut from './Shortcut/Shortcut.jsx'

// Images and Styles 
import './Results.css'

const Results = ({query, activeFilters, system}) => {
  const [showAll, setShowAll] = useState(false);

  const filteredData = useMemo(() => {
    let filteredData = [];
    for (let filter of activeFilters) {
      filteredData = [...filteredData, ...filteredHotkeys[filter]];
    }
    return filteredData.length === 0 ? masterHotkeyList : filteredData;
  }, [activeFilters])

  const returnedData = useMemo(() => {
    if (query) {
      // Convert query to lower case for case-insensitive comparison
      const lowerCaseQuery = query.toLowerCase();
      return filteredData.filter(item => 
        item.title.toLowerCase().includes(lowerCaseQuery) ||
        item.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
      );
    } 
    return filteredData;
  }, [query, filteredData]);

  
  return (
    <div id='vscodeApp_ResultsContainer'>
        <div id='vscodeApp_ResultsHeaderContainer'>
          <h2>{returnedData.length} Results</h2>
          {activeFilters.length !== 0 && (
            <div id='vscodeApp_ResultsFilters'>
              <h4>
                Filters: 
              </h4>
              {activeFilters.map((filter) => (
                <div className='d-flex ai-center'>
                  <span>{filterIcons[filter]}</span>
                  <span>{filter}</span>
                </div>
                // <span>{filterIcons[filter]}{filter}</span>
              ))}
            </div>
            )
          }
        </div>
        

        {returnedData.map((result, idx) => (
            idx < 15 && !showAll ? (
              <Shortcut data={result} system={system} key={`${result.title, idx}`}/>
            ) : (
              <button>Show All</button>
            )
        ))}
    </div>
  )
}

export default Results;