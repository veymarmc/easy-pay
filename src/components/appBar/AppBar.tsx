import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { Container } from './../';
import './appBar.scss';
import mainLogo from './../../assets/images/main-logo.svg';
import { Link } from 'react-router-dom';

function AppBar() {
	return (
		<div className='app-bar w-100 justify-content-c'>
			<Container className='app-bar__layout'>
				<div className='app-bar__controls align-items-c'>
					<img src={mainLogo} className='app-bar__logo' alt='logo' />{' '}
				</div>
				<Button as={Link} primary to='/dashboard'>
					Pay
				</Button>
			</Container>
		</div>
	);
}

export default AppBar;
