// External NPM Packages
import { Link } from 'react-router-dom';

// Components
import GradientWrapper from '../../../../../components/common/wrappers/Gradient/Gradient';
import ConditionalNavLink from './ConditionalNavLink';

const NavLink = ({ data }) => {
	const { href, content, conditionalLink } = data;

	if (conditionalLink) {
		return (
			<GradientWrapper
				styles={{
					borderRadius: '2.5px',
					marginInline: '5%',
					minHeight: '30px',
					padding: '1.5px',
					width: 'auto',
				}}
				autoSetBg={false}
			>
				<ConditionalNavLink data={data} />
			</GradientWrapper>
		);
	} else {
		return (
			<GradientWrapper
				styles={{
					borderRadius: '2.5px',
					marginInline: '5%',
					minHeight: '30px',
					padding: '1.5px',
					width: 'auto',
				}}
				autoSetBg={false}
			>
				<li>
					<Link to={href}>{content}</Link>
				</li>
			</GradientWrapper>
		);
	}
};

export default NavLink;
