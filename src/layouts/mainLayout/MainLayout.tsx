import React from 'react';
import { IProps, AppBar } from './../../components';
import './mainLayout.scss';

function MainLayout({ children }: IProps) {
	return (
		<div className='main-layout flex-column'>
			<AppBar />
			<div className='flex-1'>{children}</div>
		</div>
	);
}

export default MainLayout;
