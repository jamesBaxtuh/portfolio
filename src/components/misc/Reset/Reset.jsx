// External NPM Packages
import { useState } from 'react';
import { toast } from 'react-toastify';
import { GrPowerReset as ResetIcon } from 'react-icons/gr';

// Utilities and Constants
import usePageName from '../../../hooks/usePageName';

// Contexts
import { useUserContext } from '../../../contexts/User/UserContext';

// Images and Styles
import './Reset.css';

const Reset = () => {
	const [showConfirmation, setShowConfirmation] = useState(false);
	const { dispatch } = useUserContext();
	const pageName = usePageName();

	const promptReset = () => setShowConfirmation(true);

	const resetState = () => {
		dispatch({ type: 'RESET_STATS' });
		dispatch({
			type: 'TRACK_PAGE',
			payload: { page: pageName, timestamp: Date.now(), isFirstVisit: true },
		});
		setShowConfirmation(false); // Reset state to hide confirmation buttons
		toast.warning('Data reset!', {
			autoClose: 950,
			icon: <ResetIcon />,
		});
	};

	return (
		<div className='d-flex jc-center ai-center' id='resetState'>
			{showConfirmation ? (
				<div className='d-flex jc-saround ai-center'>
					<p className='hvr-underline-from-center' onClick={resetState}>
						Yes
					</p>
					<p
						className='hvr-underline-from-center'
						onClick={() => setShowConfirmation(false)}
					>
						No
					</p>
				</div>
			) : (
				<p onClick={promptReset} className='hvr-underline-from-center'>
					Reset site stats
				</p>
			)}
		</div>
	);
};

export default Reset;
