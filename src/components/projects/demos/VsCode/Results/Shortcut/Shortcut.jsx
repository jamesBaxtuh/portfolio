// External modules
import { useState } from 'react';
import { FaApple as Mac, FaWindows as PC} from "react-icons/fa";

// Components
import Hotkey from './Hotkey/Hotkey';

// Images and Styles
import './Shortcut.css';


const Shortcut = ({data, system}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    }
    
    const multipleHotkeys = {
        mac: data.hotkeys['mac'].includes(','),
        windows: data.hotkeys['windows'].includes(',')
    }

    function renderHotkeys(systemType) {
        return (
            <div className="d-flex ai-center">
                {systemType === 'mac' ? <Mac className='vscodeApp_SystemIcon'/> : <PC className='vscodeApp_SystemIcon'/>}
                {multipleHotkeys[systemType] ? (
                    data.hotkeys[systemType].split(',').map((hotkey, idx) => (
                        <div className="d-flex ai-center" key={`${hotkey}-${systemType}-${idx}`}>
                            <Hotkey hotkey={hotkey.trim()} system={systemType} shortcut={data} />
                            {idx === 0 && <span>or</span>}
                        </div>
                    ))
                    ) : (
                        <span style={{ marginInline: '10px' }}>
                            <Hotkey hotkey={data.hotkeys[systemType]} system={systemType} shortcut={data} />
                        </span>
                    )}
            </div>
        );
    }

    return (
        <div onClick={handleExpand} className="vscodeApp_ShortcutContainer">
            <div className="vscodeApp_Shortcut">
                <p>{data.title}</p>
                <div>
                    {(system === "" || system === 'mac') && renderHotkeys('mac')}
                    {(system === "" || system === 'windows') && renderHotkeys('windows')}
                </div>
            </div>
            {data.extra && isExpanded && (
                <p>
                    {data.extra && <p>{data.extra.mac}</p>}
                </p>
            )}
        </div>
    )
}

export default Shortcut;