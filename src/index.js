// External NPM Packages
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Images and Styles
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
