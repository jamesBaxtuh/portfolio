// External NPM Packages
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Layout from './views/Layout/Layout';
import Home from './views/Home/Home';
import Loading from './components/misc/Loading/Loading';
const Projects = lazy(() => import('./views/Project/Projects'));
const Project = lazy(() => import('./views/Project/Project'));
const NotFound = lazy(() => import('./views/Error/NotFound'));

function App() {
	return (
		<Router future={{ v7_startTransition: true }}>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route path='/' index element={<Home />} />
						<Route path='/projects' element={<Projects />}>
							<Route path='/projects/cushman' element={<Project />} />
							<Route path='/projects/user-stats' element={<Project />} />
							<Route path='/projects/easter-eggs' element={<Project />} />
						</Route>
						<Route path='*' element={<NotFound />} />
					</Route>
				</Routes>
			</Suspense>
		</Router>
	);
}

export default App;
