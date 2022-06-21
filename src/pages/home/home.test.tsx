import React from 'react';
import { screen } from '@testing-library/react';
import { redux } from './../../test';
import Home from './Home';
import counterReducer from './../../store/slices/counterSlice';
import { BrowserRouter } from 'react-router-dom';

const { render } = redux;

// Improve the unitests
test('renders learn react link', () => {
	const home = (
		<BrowserRouter>
			<Home />
		</BrowserRouter>
	);

	render(home, { counter: { value: 0 } }, counterReducer, 'counter');

	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
