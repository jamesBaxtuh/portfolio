// External NPM Packages
import { lazy } from 'react';
import usePageName from '../../hooks/usePageName.js';

// Utilities and Constants
import CUSHMAN_DATA from '../../data/content/projects/Cushman/cushmanData';
import {DEV_INSIGHT_DATA as VS_CODE_DATA} from '../../data/content/projects/VsCode/vsCode.js';
import EASTER_EGG_DATA from '../../data/content/projects/EasterEggs/easterEggData';
import SITE_STATS_DATA from '../../data/content/projects/SiteStats/siteStatsData';
import JS_LIBRARY_DATA from '../../data/content/projects/JsLibrary/jsLibrary';

// Components
import Demo from '../../components/projects/common/Demo/Demo.jsx';
import Background from '../../components/projects/common/Background/Background.jsx';

// Images and Styles
import './Project.css';

// Projects-Map
const projects = {
	Project_Cushman: {
		ProjectDemo: lazy(() =>
			import('../../components/projects/demos/Cushman/Cushman.jsx')
		),
		backgroundData: CUSHMAN_DATA,
	},
	Project_VsCode: {
		ProjectDemo: lazy(() =>
			import('../../components/projects/demos/VsCode/App.jsx')
		),
		backgroundData: VS_CODE_DATA,
	},
	Project_Eggs: {
		ProjectDemo: lazy(() =>
			import('../../components/projects/demos/EasterEggs/Eggs/Eggs.jsx')
		),
		backgroundData: EASTER_EGG_DATA,
	},
	Project_Stats: {
		ProjectDemo: lazy(() =>
			import('../../components/projects/demos/SiteStats/SiteStats.jsx')
		),
		backgroundData: SITE_STATS_DATA,
	},
	Project_JsLibrary: {
		ProjectDemo: lazy(() =>
			import('../../components/projects/demos/JsLibrary/JsLibrary.jsx')
		),
		backgroundData: JS_LIBRARY_DATA,
	},
};

const Project = () => {
	const pageName = usePageName();
	const projectData = projects[pageName];

	return (
		<>
			<Demo ProjectDemo={projectData.ProjectDemo} />
			<Background data={projectData.backgroundData} />
		</>
	);
};

export default Project;
