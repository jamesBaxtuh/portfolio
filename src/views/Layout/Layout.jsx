// External NPM Packages
import { Outlet } from 'react-router-dom';
import { ToastContainer, Flip } from 'react-toastify';

// Utilities and Constants
import useRepositionAccessibilityButton from '../../hooks/useRepositionAccessibilityButton';

// Contexts
import { UserProvider } from '../../contexts/User/UserProvider';
import { ThemeProvider } from '../../contexts/Theme/ThemeProvider';

// Components
import PageWrapper from '../../components/common/wrappers/Page/Page';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import PageTracker from '../../components/utility/PageTracker';
import ScrollToSection from '../../components/utility/ScrollToSection';

export default function Layout() {
	// useRepositionAccessibilityButton();
	return (
		<UserProvider>
			<PageTracker />
			<ScrollToSection />
			<ThemeProvider>
				<PageWrapper>
					<ToastContainer
						position='top-center'
						autoClose={2550}
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
				</PageWrapper>
			</ThemeProvider>
		</UserProvider>
	);
}
