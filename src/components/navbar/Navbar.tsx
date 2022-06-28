import React from 'react';
import { Container } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import mainLogo from './../../assets/images/main-logo.svg';
import { useNavbarContext } from '../../services/hooks';
import './navbar.scss';

function Navbar() {
	const { actions } = useNavbarContext();
	const navigate = useNavigate();

	return (
		<div className='navbar w-100'>
			<Container className='navbar__layout justify-content-sb'>
				<div className='navbar__controls align-items-c'>
					<img
						src={mainLogo}
						className='navbar__logo'
						alt='main-logo'
						onClick={() => navigate('/')}
					/>
				</div>
				<div>{actions}</div>
			</Container>
		</div>
	);
}

export default Navbar;
