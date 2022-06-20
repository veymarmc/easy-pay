import React from 'react';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { store } from './store';
import { Router } from './routes';

function App() {
	return (
		<>
			<CssBaseline /> {/*provide mui css normalization} */}
			<Provider store={store}>
				<Router />
			</Provider>
		</>
	);
}

export default App;
