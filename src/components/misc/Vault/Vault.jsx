import { TfiLock as Lock } from 'react-icons/tfi';

import './Vault.css';

const Vault = () => {
	return (
		<div id='vaultContainer' className='d-flex fd-col ai-center'>
			<div className='lockContainer d-flex jc-center ai-center'>
				<Lock />
			</div>
			<input type='text' name='' id='' value='?' />
		</div>
	);
};

export default Vault;
