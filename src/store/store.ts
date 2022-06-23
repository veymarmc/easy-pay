import { configureStore } from '@reduxjs/toolkit';
import { counterReducer, barActionsReducer } from './slices';

const store = configureStore({
	reducer: {
		counter: counterReducer,
		barActions: barActionsReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
