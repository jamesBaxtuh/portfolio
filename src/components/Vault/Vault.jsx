// External NPM Packages
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { TfiLock as Lock } from 'react-icons/tfi';
// import { MdKeyboardBackspace as Key } from 'react-icons/md';
import { IoKeyOutline as Key } from 'react-icons/io5';

// Utilities and Constants
import { findEgg } from '../../utils/contexts/user/eggUtils';

// Contexts
import { useUserContext } from '../../contexts/User/UserContext';

// Components
import Countdown from '../misc/Countdown/Countdown';
import Sparkles from '../misc/Sparkles/Sparkles';
import GradientWrapper from '../common/wrappers/Gradient/Gradient';

// Images and Styles
import './Vault.css';

const inputPlaceholder = 'Enter code';
const Vault = ({ version = 'v2' }) => {
	const { state, dispatch } = useUserContext();
	const [previousInputValue, setPreviousInputValue] = useState('');
	const [inputValue, setInputValue] = useState('');
	const [canSubmit, setCanSubmit] = useState(true);
	const [lockContainerClass, setLockContainerClass] = useState('');
	const [showSecretLink, setShowSecretLink] = useState(false);

	const handleInputChange = useCallback((e) => {
		setInputValue(e.target.value);
	}, []);

	const handleSubmit = useCallback(() => {
		const correctCode = 'secret'; // Define the correct code as a constant
		const isCorrect = inputValue.trim() === correctCode;

		setLockContainerClass(isCorrect ? 'success' : 'failure');

		if (!isCorrect) {
			setCanSubmit(false);
			setPreviousInputValue(inputValue);
			setInputValue('Incorrect');
		} else {
			console.log('Resetting input');
			setInputValue('');
			setShowSecretLink(isCorrect);
		}
	}, [inputValue]);

	const handleKeyDown = (e) => {
		if (e.code === 'Enter') {
			handleSubmit();
		}
	};

	const handleOnBlur = () => {
		inputValue !== '' && handleSubmit();
	};

	const handleKeyHover = () => {
		// setInputValue('');
		inputValue !== '' && handleSubmit();
	};

	useEffect(() => {
		if (!canSubmit) {
			const id = setTimeout(() => {
				setCanSubmit(true);
				setInputValue(previousInputValue);
				setPreviousInputValue('');
			}, 3000);
			return () => clearTimeout(id);
		}
	}, [canSubmit]);

	useEffect(() => {
		if (lockContainerClass !== 'success') {
			const id = setTimeout(() => setLockContainerClass(''), 3000);
			return () => clearTimeout(id);
		}
	}, [lockContainerClass]);

	useEffect(() => {
		if (showSecretLink) {
			findEgg(3, state, dispatch);
		}
	}, [showSecretLink, state, dispatch]);

	if (version === 'v1') {
		return (
			<GradientWrapper
				styles={{
					borderRadius: '2.5px',
					height: '100%',
					padding: '1px',
					width: '100%',
					maxWidth: '200px',
				}}
				// autoSetBg={false}
			>
				<div id='vaultContainer' className='d-flex fd-col ai-center'>
					<div
						className={`lockContainer d-flex jc-center ai-center ${lockContainerClass}`}
					>
						{canSubmit && <Lock />}
						{!canSubmit && (
							<Countdown
								startValue={3000}
								increment={1000}
								useRandomColor={false}
								textColor='rgb(255 0 0 / 0.85)'
							/>
						)}
					</div>
					<button onClick={handleSubmit} aria-label='Submit secret code'>
						{canSubmit ? 'Crack code' : 'Disabled'}
					</button>
					{!showSecretLink && (
						<>
							<input
								type='text'
								name='secretInput'
								placeholder={inputPlaceholder} // Use placeholder instead of value
								value={inputValue}
								onChange={handleInputChange}
								disabled={canSubmit ? false : true}
								onBlur={() => !inputValue && setInputValue('')} // Reset to default message when input loses focus
								aria-label='Secret code input'
							/>
							{!canSubmit && <p>Please wait a moment before trying again.</p>}
							{canSubmit && (
								<button onClick={handleSubmit} aria-label='Submit secret code'>
									{canSubmit ? 'Crack code' : 'Disabled'}
								</button>
							)}
						</>
					)}
					{showSecretLink && (
						<Sparkles>
							<Link to='/secret'>View secret page</Link>
						</Sparkles>
					)}
				</div>
			</GradientWrapper>
		);
	} else {
		return (
			<div id='vaultContainerV2' className='d-flex fd-col ai-center'>
				{!showSecretLink && (
					<div
						// className={`lockContainerV2 d-flex jc-center ai-center ${lockContainerClass}`}
						className={`lockContainerV2 d-flex jc-center ai-center`}
					>
						<Lock className={`${lockContainerClass}`} />
						<input
							type='text'
							name='secretInput'
							placeholder={inputPlaceholder} // Use placeholder instead of value
							value={inputValue}
							onChange={handleInputChange}
							disabled={canSubmit ? false : true}
							onBlur={handleOnBlur} // Submit when input isn't empty and loses focus
							aria-label='Secret code input'
							onKeyDown={handleKeyDown}
						/>
						{/* <Key onHover={handleKeyHover} /> */}
						{/* <Key /> */}
						{/* {!showSecretLink && (
						<button onClick={handleSubmit} aria-label='Submit secret code'>
						{canSubmit ? 'Crack code' : 'Disabled'}
						</button>
					)} */}
					</div>
				)}
				{showSecretLink && (
					<Sparkles>
						<Link to='/secret'>Visit secret page</Link>
					</Sparkles>
				)}
			</div>
		);
	}
};

export default Vault;
