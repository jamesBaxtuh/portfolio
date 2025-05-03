// External NPM Packages
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { TfiLock as Lock } from 'react-icons/tfi';

// Utilities and Constants
import { findEgg } from '../../utils/contexts/user/eggUtils';

// Contexts
import { useUserContext } from '../../contexts/User/UserContext';

// Components
import Sparkles from '../misc/Sparkles/Sparkles';

// Images and Styles
import './VaultV2.css';

const inputPlaceholder = 'Press enter to submit code';
const VaultV2 = () => {
	const { state, dispatch } = useUserContext();
	const [inputValue, setInputValue] = useState('');
	const [success, setSuccess] = useState(null);
	const [failCount, setFailCount] = useState(0);

	const handleInputChange = useCallback((e) => {
		setInputValue(e.target.value);
	}, []);

	const handleSubmit = useCallback(() => {
		const correctCode = 'secret'; // Define the correct code as a constant
		const isCorrect = inputValue.trim() === correctCode;

		setSuccess(isCorrect);

		if (!isCorrect) {
			setInputValue('Incorrect');
		}
	}, [inputValue]);

	const resetState = (fullReset = false) => {
		setSuccess(null); // Reset success to null (so failure animation/styling doesn't persist)
		setInputValue(''); // Reset input
	};

	useEffect(() => {
		// Handle success case
		if (success === true) {
			findEgg(3, state, dispatch);
			resetState(true);
			setFailCount(0);
		}
	}, [success, state, dispatch]);

	useEffect(() => {
		// Handle failure case with a delay
		let timeoutId;
		if (success === false) {
			timeoutId = setTimeout(() => {
				resetState();
				setFailCount(failCount + 1);
			}, 3000);
		}
		// Cleanup timeout when the component unmounts or success changes
		return () => clearTimeout(timeoutId);
	}, [success]);

	return (
		<div id='vaultContainerV2' className='d-flex fd-col ai-center'>
			{!state.easterEggs.eggs[3].found && (
				<div className={`lockContainerV2 ${success === false && 'failure'}`}>
					<div>
						<Lock className={`${success === false && 'failure'}`} />
						<input
							type='text'
							name='secretInput'
							placeholder={inputPlaceholder} // Use placeholder instead of value
							value={inputValue}
							onChange={handleInputChange}
							disabled={success === null ? false : true}
							aria-label='Enter the secret code to unlock'
							onKeyDown={(e) => e.code === 'Enter' && handleSubmit()} // Submit when pressing Enter
						/>
					</div>
					<em>I wonder if there are any hints for this around the site...</em>
				</div>
			)}
			{state.easterEggs.eggs[3].found && (
				<Sparkles className='hvr-underline-from-center'>
					<Link to='/secret'>Visit secret page</Link>
				</Sparkles>
			)}
		</div>
	);
};

export default VaultV2;
