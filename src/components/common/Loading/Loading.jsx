// Images and Styles
import './Loading.css';

const Loading = () => {
	return (
		<div
			id='loadingContainer'
			className='inset-0 d-flex fd-col jc-center ai-center pos-fixed'
		>
			<div id='spinner'></div>
			<i>Loading...</i>
		</div>
	);
};

export default Loading;
