// External NPM Packages
import { useState } from 'react';
import { GiLockedChest as Chest } from 'react-icons/gi';

// Utilities and Constants
import { infoContext } from '../../data/content/common/themedTextData';

// Contexts
import { useUserContext } from '../../contexts/User/UserContext';

// Components
import ContentWrapper from '../../components/common/wrappers/Content/Content';
import ContextualText from '../../components/common/text/Contextual/Contextual';
import NotFound from '../Error/NotFound';

// Images and Styles

const Secret = () => {
	const { state } = useUserContext();
	const foundSecretPage = state.easterEggs.eggs[3].found;

	if (!foundSecretPage) return <NotFound />;

	return (
		<ContentWrapper styles={{ maxWidth: '90vw', margin: 'auto' }}>
			<h1>Nice Job!</h1>
			<ContextualText textContext={infoContext}>
				We tested out this secret page functionality on 17 apes and 3 of them
				found it. What does that say about the people who never found this? :o
			</ContextualText>
			<p>
				Well, you're most certainly wondering what your reward is for your hard
				work... I mean, honestly, who would have even guessed the code would be
				secret?!
			</p>
			<p>
				By brute force or superb detective skills, you eventually did! In either
				case, skills as remarkable as yours deserve proper recognition -- don't
				worry, I've saved nothing but the best for top-notch users such as
				yourself. Well, what are you waiting for? Click on your reward below!
			</p>
		</ContentWrapper>
	);
};

export default Secret;
