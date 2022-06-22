import React from 'react';
import { ApiExample, Counter, Dashboard, Home, LandingPage } from './../pages';

interface RouteInterface {
	path: string;
	element: React.ReactElement;
}

const routes: Array<RouteInterface> = [
	{
		path: '/',
		element: <LandingPage />,
	},
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: '/dashBoard',
		element: <Dashboard />,
	},
	{
		path: '/counter',
		element: <Counter />,
	},
	{
		path: '/api-use-example',
		element: <ApiExample />,
	},
];

export default routes;
