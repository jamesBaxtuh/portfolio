// Images and Styles
import './Socials.css';

const Socials = ({ socials, parent }) => {
	return (
		<div id='socialsContainer' className='d-flex jc-center ai-center'>
			{socials.map((social) => {
				const { link, ReactIcon, id } = social;
				return (
					<a
						href={link}
						target='_blank'
						rel='noopener noreferrer'
						key={`${parent}${id}`}
					>
						{ReactIcon ? <ReactIcon /> : null}
					</a>
				);
			})}
		</div>
	);
};

export default Socials;
