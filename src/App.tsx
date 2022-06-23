import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Routes } from './routes';
import { MainLayout } from './layouts';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<MainLayout>
					<Routes />
				</MainLayout>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
