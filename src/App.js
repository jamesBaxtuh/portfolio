// External NPM Packages
import React, { Suspense, lazy } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Outlet,
} from "react-router-dom";

// Components
import Layout from "./views/Layout/Layout";
import Home from "./views/Home/Home";
import Loading from "./components/common/Loading/Loading";
const Projects = lazy(() => import("./views/Projects/Projects"));
const Project = lazy(() => import("./views/Project/Project"));
const Secret = lazy(() => import("./views/Secret/Secret"));
const NotFound = lazy(() => import("./views/Error/NotFound"));

function App() {
	return (
		<Router future={{ v7_startTransition: true }}>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="projects" element={<Outlet />}>
							<Route index element={<Projects />} />
							<Route path="cushman" element={<Project />} />
							<Route
								path="vscode-shortcuts"
								element={<Project />}
							/>
							<Route path="site-stats" element={<Project />} />
							<Route path="easter-eggs" element={<Project />} />
							<Route path="js-ds-library" element={<Project />} />
						</Route>
						<Route path="/secret" element={<Secret />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</Suspense>
		</Router>
	);
}

export default App;
