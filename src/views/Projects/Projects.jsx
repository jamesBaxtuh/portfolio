// External NPM Packages

// Utilities and Constants
import PREVIEW_DATA from '../../data/content/projects/common/previewData';

// Contexts

// Components
import ContentWrapper from '../../components/common/wrappers/Content/Content';
import Preview from '../../components/projects/common/Preview/Preview';

// Images and Styles
import './Projects.css';

const Projects = () => {
	return (
		<ContentWrapper containChildren={true}>
			<div className='projectsHeader'>
				<h1 className=''>Project Display</h1>
				<p>Explore my showcased projects, each accompanied by a live demo and detailed development insights.</p>
			</div>
			{PREVIEW_DATA.map((projectPreview) => (
				<Preview data={projectPreview} key={projectPreview.title} />
			))}
		</ContentWrapper>
	);
};

export default Projects;
