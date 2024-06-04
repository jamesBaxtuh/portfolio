// External modules
import React from 'react';

// Components
import Key from './Key/Key';

// Images and Styles
import './Hotkey.css';


const Hotkey = ({hotkey, system}) => {
    const determineKeys = () => {
        let children = hotkey.includes(" ") ? hotkey.split(" ") : hotkey.split("+");
        const keys = [];

        children.forEach((segment) => {
            if (segment.includes("/")) {
                const parts = segment.split("/");
                keys.push(parts[0], "/", parts[1]);
            } else if (segment.includes("+")) {
                keys.push(segment.split("+"));
            } else {
                keys.push(segment);
            }
        })
        
        return keys;
    }
    
    const keys = determineKeys();
    return (
        <div className='vscodeApp_Hotkey'>
            {keys.map((keyValue, idx) => (
                <React.Fragment key={idx}>
                    <Key keyValue={keyValue} system={system} />
                    {/* {idx < keys.length - 1 && system !== 'mac' && keys[idx + 1] !== "/" && keys[idx] !== "/" && " + "} */}
                </React.Fragment>
            ))}
        </div>
    )
}

export default Hotkey;