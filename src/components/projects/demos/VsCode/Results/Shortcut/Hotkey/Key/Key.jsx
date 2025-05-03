// External modules
import React from 'react';

// Utilities and Constants
import { pcKeys, macKeys } from "../../../../../../../../data/content/projects/VsCode/vsCode";

// Images and Styles
import './Key.css'


const KeyboardKey = ({ keyValue, system }) => {
    const keySet = system === 'mac' ? macKeys : pcKeys;    
    const separatorClass = keyValue === '/' ? 'separator' : '';
    
    const determineKeyValue = (keyStr) => {
      const KeyComponent = keySet[keyStr] || keyStr;
      return typeof KeyComponent === 'string' ? <>{KeyComponent}</> : KeyComponent && <KeyComponent />;
    };

    const renderKeys = (keys) => {
      return keys.map((key, idx) => (
          <React.Fragment key={idx}>
              <span>{determineKeyValue(key)}</span>
              {idx < keys.length - 1 && system !== 'mac' && <span>+</span>}
          </React.Fragment>
      ));
    };  

    return (
        <div className={`vscodeApp_KeyContainer ${separatorClass}`}>
            <div className="vscodeApp_Key">
                {Array.isArray(keyValue) ? renderKeys(keyValue) : <span>{determineKeyValue(keyValue)}</span>}
            </div>
        </div>
    );
}

export default KeyboardKey;
