// External NPM Packages
import { useState } from 'react';
import { styled, keyframes } from 'styled-components';

// Utilities and Constants
import useRandomInterval from '../../../hooks/useRandomInterval';
import usePrefersReducedMotion from '../../../hooks/usePrefersReducedMotion';
import generateSparkle from '../../../utils/generateSparkle';
import range from '../../../utils/range';

export default function Sparkles({
	colors = '#FFC700', // Default color: yellow
	children,
	...delegated
}) {
	const [sparkles, setSparkles] = useState(() => {
		return range(4).map(() => generateSparkle(colors));
	});

	const prefersReducedMotion = usePrefersReducedMotion();
	useRandomInterval(
		() => {
			const sparkle = generateSparkle(colors);
			const now = Date.now();
			const nextSparkles = sparkles.filter((sp) => {
				const delta = now - sp.createdAt;
				return delta < 750;
			});
			nextSparkles.push(sparkle);
			setSparkles(nextSparkles);
		},
		prefersReducedMotion ? null : 50,
		prefersReducedMotion ? null : 500
	);

	return (
		<Wrapper {...delegated}>
			{sparkles.map((sparkle) => (
				<Sparkle
					key={sparkle.id}
					color={sparkle.color}
					size={sparkle.size}
					style={sparkle.style}
				/>
			))}
			<ChildWrapper>{children}</ChildWrapper>
		</Wrapper>
	);
}

const Sparkle = ({ size, color, style }) => {
	const path =
		'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z';
	return (
		<SparkleWrapper style={style}>
			<SparkleSvg width={size} height={size} viewBox='0 0 68 68' fill='none'>
				<path d={path} fill={color} />
			</SparkleSvg>
		</SparkleWrapper>
	);
};
const comeInOut = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;
const Wrapper = styled.span`
	display: inline-block;
	position: relative;
`;
const SparkleWrapper = styled.span`
	display: block;
	position: absolute;
	@media (prefers-reduced-motion: no-preference) {
		animation: ${comeInOut} 700ms forwards;
	}
`;
const SparkleSvg = styled.svg`
	display: block;
	@media (prefers-reduced-motion: no-preference) {
		animation: ${spin} 1000ms linear;
	}
`;
const ChildWrapper = styled.strong`
	position: relative;
	z-index: 1;
`;
