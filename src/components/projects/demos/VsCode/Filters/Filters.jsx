// External files
import {useState, useMemo} from 'react';
import { CiCircleChevDown as Down, CiCircleChevUp as Up } from "react-icons/ci";
import { IoTrashOutline as Trash } from "react-icons/io5";
import './Filters.css'

// Utilities and Constants
import {filters} from '../../../../../data/content/projects/VsCode/vsCode';

const Filters = ({activeFilters, setActiveFilters}) => {
    const [showFilters, setShowFilters] = useState(false);

    /**
        * Handles filter click events. 
        * @param {object} e - The event object from the click event.
        * @returns {void}
    */
    const onClick = (filter) => {
        // General filter
        const filterPreviouslyActive = activeFilters.includes(filter);
        if (filterPreviouslyActive) {
            // Unset previously active filter 
            setActiveFilters((previousState) => previousState.filter((activeFilter)=> activeFilter !== filter))
        } else {
            // Set filter as active
            setActiveFilters((previousState) => [...previousState, filter]);
        }
    }

    const activeFiltersMap = useMemo(() => {
        const map = {};
        filters.forEach((filter) => map[filter] = false) // Populate map with filters
        activeFilters.forEach((activeFilter) => map[activeFilter] = true) // Note active filters
        return map;
    }, [activeFilters])

    return (
      <div id='vscodeApp_FiltersContainer'>
            <div>
                <p>Filters</p>
                {!showFilters ? <Down onClick={() => setShowFilters(true)} /> : <Up onClick={() => setShowFilters(false)}/>}
            </div>
            {showFilters && 
                <div id="vscodeApp_Filters">
                {filters.map((filter) => (
                    <button key={filter} onClick={() => onClick(filter)} aria-pressed={activeFiltersMap[filter]} className={activeFiltersMap[filter] ? "vscodeApp_Filter activeFilter" : "vscodeApp_Filter" }>
                        <span>
                            {filter}
                        </span>
                        {activeFiltersMap[filter] && <Trash/>}
                    </button>
                ))}
                </div>
            }
      </div>
    )
  }
  
  export default Filters;