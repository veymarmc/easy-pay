import React from 'react';
import LandingPageItem from '../LandingPageItem';
import './mainContent.scss';
import phoneViewImage from './../../../../assets/images/phone-view.png';
import { Button } from 'semantic-ui-react';

function MainContent() {
	return (
		<LandingPageItem className='lp-main-content' containerClass='flex'>
			<div className='w-50'>
				<h1 className='lp-main-content__title'>Check your Billings so easy!</h1>
				<p className='lp-main-content__description'>
					Check the your billings state only with a simple click, the history and many more data!
				</p>
				<div className='lp-main-content__controls flex-column inline-flex'>
					<Button className='lp-main-content__start' size='big'>
						Start Budgettign for free!
					</Button>
					<Button className='lp-main-content__unlock' size='big'>
						Unlock Premium Features
					</Button>
				</div>
			</div>
			<div className='w-50 p-relative'>
				<img src={phoneViewImage} className='lp-main-content__image flex-1' alt='phone-logo' />
			</div>
		</LandingPageItem>
	);
}

export default MainContent;
