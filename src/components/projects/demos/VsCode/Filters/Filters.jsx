// External files
import { IoTrashOutline as Trash } from "react-icons/io5";
import {useMemo} from 'react';
import './Filters.css'

// Utilities and Constants
import {filters, activeFiltersObj} from '../../../../../data/content/projects/VsCode/vsCode';

const Filters = ({activeFilters, setActiveFilters, system, setSystem}) => {
    /**
        * Handles toggling of system-specific filters.
        * @param {string} newSystem - The new state of system.
        * @returns {void}
    */
    const handleSystemFilter = (newSystem) => {
        const systemValue = newSystem === 'Mac Only' ? 'mac' : 'windows';
        // Reset system state when user toggles same system filter
        if (system === systemValue) {
            setSystem("")
        } else {
            setSystem(systemValue);
        }
    }
    
    /**
        * Handles filter click events. 
        * @param {object} e - The event object from the click event.
        * @returns {void}
    */
    const onClick = (filter) => {
        // System-specific filter handling
        if (filter === 'Mac Only' || filter === 'PC Only') {
            handleSystemFilter(filter);
        }
        // } else {
            // General filter
            const filterPreviouslyActive = activeFilters.includes(filter);
            if (filterPreviouslyActive) {
                // Unset previously active filter 
                setActiveFilters((previousState) => previousState.filter((activeFilter)=> activeFilter !== filter))
            } else {
                // Set filter as active
                setActiveFilters((previousState) => [...previousState, filter]);
            }
        // }
    }

    const activeFiltersMap = useMemo(() => {
        const map = {};
        filters.forEach((filter) => map[filter] = false) // Populate map with filters
        activeFilters.forEach((activeFilter) => map[activeFilter] = true) // Note active filters
        return map;
    }, [activeFilters])

    return (
      <div id='vscodeApp_FiltersContainer'>
            <h3>Filters</h3>
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
      </div>
    )
  }
  
  export default Filters;