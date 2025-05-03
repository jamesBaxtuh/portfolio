// External NPM Packages
import { Link, useLocation } from 'react-router-dom';

const ConditionalNavLink = ({ data }) => {
	const { href, content } = data;
	const location = useLocation();
	const isHomePage = location.pathname === '/';

	if (isHomePage) {
		// If on the homepage, use an <a> tag to enable in-page navigation.
		return (
			<li>
				<a href={href}>{content}</a>
			</li>
		);
	} else {
		// If on another page, use <Link> for SPA-like behavior.
		return (
			<li>
				<Link to={href}>{content}</Link>
			</li>
		);
	}
};

export default ConditionalNavLink;
