import React from 'react';
import { Container } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import mainLogo from './../../assets/images/main-logo.svg';
import { useAppSelector } from './../../store';
import './appBar.scss';

function AppBar() {
	const actions = useAppSelector((state) => state.barActions.value);
	const navigate = useNavigate();

	return (
		<>
			<div className='app-bar w-100'>
				<Container className='app-bar__layout justify-content-sb'>
					<div className='app-bar__controls align-items-c'>
						<img
							src={mainLogo}
							className='app-bar__logo'
							alt='main-logo'
							onClick={() => navigate('/')}
						/>
					</div>
					<div>{actions}</div>
				</Container>
			</div>
		</>
	);
}

export default AppBar;
