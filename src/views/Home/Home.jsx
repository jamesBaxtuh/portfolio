// Utilities and Constants
import SKILL_DATA from '../../data/misc/skillData';
import { PROJECT_CUSHMAN } from '../../data/misc/projectData';
import {
	HOME_LEFT_CARDS,
	HOME_RIGHT_CARDS,
} from '../../data/misc/homeCardData.js';

// Components
import ContentWrapper from '../../components/common/wrappers/Content/Content.jsx';
import Blur from '../../components/common/Blur/Blur.jsx';
import Spotlight from '../../components/Project/Spotlight/Spotlight';
import Cards from '../../components/Cards/Cards.jsx';
import Skills from '../../components/Skills/Skills/Skills.jsx';
import Triangle from '../../components/common/shapes/rounded/RightTriangle.jsx';
import Diamond from '../../components/common/shapes/rounded/Diamond.jsx';

// Images and Styles
import './Home.css';

export default function Home() {
	return (
		<div>
			<ContentWrapper>
				<section id='homeIntro'>
					<h1>Nicholas Dunn</h1>
					<p className='fw-300'>U.S. Based Fullstack Developer</p>
				</section>
				<section id='homeTopContent' className='d-flex jc-saround w-standard'>
					<Cards data={HOME_LEFT_CARDS} />
					<div className='homePhotoContainer d-flex ai-fstart jc-center pos-rel'>
						<img
							className='homePhoto'
							src='https://res.cloudinary.com/thatcloudisbuff/image/upload/v1710040498/oklrmtnoqbptaqtwsobr.jpg'
							alt='My 3-legged cat in a sweater and I.'
						/>
					</div>
					<div className='d-flex fd-col'>
						<Cards data={HOME_RIGHT_CARDS} textAlign='right' />
						<Skills skillData={SKILL_DATA} easterEgg={true} />
					</div>
				</section>
			</ContentWrapper>
			<ContentWrapper
				styles={{
					backgroundColor: 'var(--primary-color-2)',
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
						<Spotlight projectData={PROJECT_CUSHMAN} />
					</Blur>
				</section>
			</ContentWrapper>
		</div>
	);
}
