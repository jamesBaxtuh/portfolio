import { FaApple as Mac, FaWindows as Windows} from "react-icons/fa";
import './System.css'


const System = ({system, setSystem}) => {
    /**
        * Handles toggling of system-specific filters.
        * @param {string} newSystem - The new state of system.
        * @returns {void}
    */
    const handleSystemFilter = (newSystem) => {
        const systemValue = newSystem.toLowerCase(); 
        // Reset system state when user toggles same system filter
        if (system === systemValue) {
            setSystem("")
        } else {
            setSystem(systemValue);
        }
    }

    return (
        <div className="d-flex jc-center ai-center w-100">
            {/* <p className="m-0">System</p> */}
            <div className="d-flex jc-center ai-center">
                <button className={system === 'mac' ? "vscodeApp_Filter activeFilter system" : "vscodeApp_Filter system"} onClick={() => handleSystemFilter('Mac')}>
                    <Mac/> 
                    Mac
                </button>
                <button className={system === 'windows' ? "vscodeApp_Filter activeFilter system" : "vscodeApp_Filter system"} onClick={() => handleSystemFilter('Windows')}>
                    <Windows/> 
                    Windows
                </button>
            </div>
        </div>
    )
}

export default System;