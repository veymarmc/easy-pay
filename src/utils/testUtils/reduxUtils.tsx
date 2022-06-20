import React from 'react';
import { render as renderRTL } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import type { Reducer, Action, PreloadedState } from 'redux';

interface WrapProps {
	children: React.ReactNode;
}

export function render<T>(
	component: React.ReactElement,
	initialState: PreloadedState<T>,
	reducer: Reducer<any, Action>,
	reducerName: string,
	renderOptions: any = {}
) {
	const store = configureStore({
		reducer: {
			[reducerName]: reducer,
		},
		preloadedState: initialState,
	});

	const Wrapper = ({ children }: WrapProps) => {
		return <Provider store={store}>{children}</Provider>;
	};

	return renderRTL(component, { wrapper: Wrapper, ...renderOptions });
}
