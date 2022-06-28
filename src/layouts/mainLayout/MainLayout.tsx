import React, { ReactNode, useMemo, useState } from 'react';
import { IProps, Navbar } from './../../components';
import { navbarActionsContext } from '../../services/context';
import './mainLayout.scss';

const { Provider } = navbarActionsContext;

function MainLayout({ children }: IProps) {
	const [navbarActions, setNavbarActions] = useState<ReactNode>(<></>);
	const actionsContext = useMemo(
		() => ({
			actions: navbarActions,
			setActions: setNavbarActions,
		}),
		[navbarActions, setNavbarActions]
	);

	return (
		<div className='main-layout flex-column'>
			<Provider value={actionsContext}>
				<Navbar />
				<div className='flex-1'>{children}</div>
			</Provider>
		</div>
	);
}

export default MainLayout;
