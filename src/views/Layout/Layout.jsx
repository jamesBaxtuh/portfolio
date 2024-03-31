// External NPM Packages
import { Outlet } from 'react-router-dom';
import { ToastContainer, Flip } from 'react-toastify';

// Utilities and Constants
import useRepositionAccessibilityButton from '../../hooks/useRepositionAccessibilityButton';

// Contexts
import { UserProvider } from '../../contexts/User/UserProvider';
import { ThemeProvider } from '../../contexts/Theme/ThemeProvider';

// Components
import Header from './Header/Header';
import Footer from './Footer/Footer';
import PageTracker from '../../components/misc/PageTracker';

// Images and Styles
import './Layout.css';

export default function Layout() {
	// useRepositionAccessibilityButton();
	return (
		<UserProvider>
			<PageTracker />
			<ThemeProvider>
				<main
					id='pageContainer'
					className='d-flex fd-col bg-primary c-alternate'
				>
					<ToastContainer
						position='top-center'
						autoClose={1750}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme='colored'
						transition={Flip}
					/>
					<Header />
					<Outlet />
					<Footer />
				</main>
			</ThemeProvider>
		</UserProvider>
	);
}
