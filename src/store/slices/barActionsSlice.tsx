import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

interface IBarActions {
	value: ReactNode;
}

const initialState: IBarActions = {
	value: <div style={{ display: 'none' }}></div>,
};

export const barActionsSlice = createSlice({
	name: 'barActions',
	initialState,
	reducers: {
		changeBarActions: (state, action: PayloadAction<ReactNode>) => {
			state.value = action.payload;
		},
		reset: (state) => {
			state.value = initialState.value;
		},
	},
});

export const barActions = barActionsSlice.actions;

export default barActionsSlice.reducer;
