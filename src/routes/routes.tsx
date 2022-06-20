import React from 'react';
import { Counter, Home, LandingPage } from './../pages';

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
		path: '/counter',
		element: <Counter />,
	},
];

export default routes;
