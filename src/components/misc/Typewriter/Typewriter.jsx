// External NPM Packages
import { useState, useEffect } from 'react';

const Typewriter = ({
	texts,
	typingDelay = 150,
	erasingDelay = 100,
	newTextDelay = 2000,
}) => {
	const [normalText, setNormalText] = useState('');
	const [highlightText, setHighlightText] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);
	const [loopNum, setLoopNum] = useState(0);
	const [typingSpeed, setTypingSpeed] = useState(typingDelay);
	const [isBlinking, setIsBlinking] = useState(false);

	useEffect(() => {
		let timer;
		const current = loopNum % texts.length;
		const fullNormalText = texts[current][0];
		const fullHighlightText = texts[current][1];

		const handleTyping = () => {
			if (isDeleting) {
				if (highlightText.length) {
					setHighlightText(
						fullHighlightText.substring(0, highlightText.length - 1)
					);
				} else {
					setNormalText(fullNormalText.substring(0, normalText.length - 1));
				}
			} else {
				if (normalText.length !== fullNormalText.length) {
					setNormalText(fullNormalText.substring(0, normalText.length + 1));
				} else {
					setHighlightText(
						fullHighlightText.substring(0, highlightText.length + 1)
					);
				}
			}
			setTypingSpeed(isDeleting ? erasingDelay : typingDelay);
		};

		const fullText = fullNormalText + fullHighlightText;
		const currentText = normalText + highlightText;

		if (isDeleting && currentText === '') {
			setIsDeleting(false);
			setIsBlinking(true);
			setLoopNum(loopNum + 1);
			setTypingSpeed(newTextDelay);
		} else if (!isDeleting && currentText === fullText) {
			setIsBlinking(true);
			timer = setTimeout(() => {
				setIsBlinking(false);
				setIsDeleting(true);
			}, newTextDelay);
		} else {
			timer = setTimeout(() => {
				setIsBlinking(false);
				handleTyping();
			}, typingSpeed);
		}

		return () => clearTimeout(timer);
	}, [
		normalText,
		highlightText,
		isDeleting,
		loopNum,
		texts,
		typingDelay,
		erasingDelay,
		newTextDelay,
		typingSpeed,
	]);

	return (
		<div className='d-flex ai-center'>
			<h2>
				{normalText}
				<span className='fw-500 c-highlight'> {highlightText}</span>
				<span className={`${isBlinking ? 'blinking' : ''}`}>|</span>
			</h2>
		</div>
	);
};

export default Typewriter;
