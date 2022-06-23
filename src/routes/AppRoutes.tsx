import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';

function AppRoutes() {
	return (
		<Routes>
			{routes.map((route, i) => (
				<Route key={i} {...route} />
			))}
		</Routes>
	);
}

export default AppRoutes;
