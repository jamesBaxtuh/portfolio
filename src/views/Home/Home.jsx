// Utilities and Constants
import skillData from '../../data/misc/skillData';
import { projectCushman } from '../../data/misc/projectData';
import { findEgg } from '../../utils/userContext/eggUtils.js';
import {
	HOME_LEFT_STATS,
	HOME_RIGHT_STATS,
} from '../../data/misc/homeCardData.js';

// Contexts
import { useUserContext } from '../../contexts/User/UserContext.js';

// Components
import PageWrapper from '../../components/layout/PageWrapper/Wrapper.jsx';
import ContentWrapper from '../../components/layout/ContentWrapper/Wrapper.jsx';
import Blur from '../../components/misc/Blur/Blur.jsx';
import Spotlight from '../../components/Project/Spotlight/Spotlight';
import Cards from '../../components/Cards/Cards.jsx';
import Skills from '../../components/Skills/Skills/Skills.jsx';
import Triangle from '../../components/misc/shapes/rounded/RightTriangle';
import Diamond from '../../components/misc/shapes/rounded/Diamond';

// Images and Styles
import './Home.css';

export default function Home() {
	const { state, dispatch } = useUserContext();
	return (
		<PageWrapper styles={{ fontFamily: 'var(--rs-font-family)' }}>
			<ContentWrapper>
				<section id='homeIntro'>
					<h1>Nicholas Dunn</h1>
					<p className='fw-300'>U.S. Based Fullstack Developer</p>
				</section>
				<section id='homeTopContent' className='d-flex jc-saround w-standard'>
					<Cards data={HOME_LEFT_STATS} />
					<div className='homePhotoContainer d-flex ai-fstart jc-center pos-rel'>
						<img
							className='homePhoto'
							src='https://res.cloudinary.com/thatcloudisbuff/image/upload/v1710040498/oklrmtnoqbptaqtwsobr.jpg'
							alt='My 3-legged cat in a sweater and I.'
							onClick={() => findEgg(1, state, dispatch)}
						/>
					</div>
					<div className='d-flex fd-col'>
						<Cards data={HOME_RIGHT_STATS} textAlign='right' />
						<Skills skillData={skillData} />
					</div>
				</section>
			</ContentWrapper>
			<ContentWrapper
				styles={{
					backgroundColor: 'var(--primary-color2)',
				}}
			>
				<section className='w-100 pos-rel of-hidden'>
					<Triangle
						key='t1'
						id='t1'
						styles={{
							position: 'absolute',
							left: '5%',
							height: '20vh',
							width: '20vw',
							colorOne: 'var(--shape-1-color-1)',
							colorTwo: 'var(--shape-1-color-2)',
						}}
					/>
					<Triangle
						key='t2'
						id='t2'
						styles={{
							position: 'absolute',
							left: '10%',
							height: '20vh',
							width: '20vw',
							colorOne: 'var(--shape-2-color-1)',
							colorTwo: 'var(--shape-2-color-2)',
						}}
					/>
					<Diamond
						key='d1'
						id='d1'
						styles={{
							position: 'absolute',
							right: '-3.5%',
							bottom: '-7.5%',
							height: '20vh',
							width: '20vw',
							colorOne: 'var(--shape-1-color-1)',
							colorTwo: 'var(--shape-1-color-2)',
						}}
					/>
					<Diamond
						key='d2'
						id='d2'
						styles={{
							position: 'absolute',
							right: '-10%',
							bottom: '15%',
							height: '20vh',
							width: '20vw',
							colorOne: 'var(--shape-2-color-2)',
							colorTwo: 'var(--shape-2-color-1)',
						}}
					/>
					<Blur blurRadius='7.5px'>
						<Spotlight projectData={projectCushman} />
					</Blur>
				</section>
			</ContentWrapper>
		</PageWrapper>
	);
}
