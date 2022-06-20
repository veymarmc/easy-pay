import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';

function ReactRouter() {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route, i) => (
					<Route key={i} {...route} />
				))}
			</Routes>
		</BrowserRouter>
	);
}

export default ReactRouter;
