import React, { useMemo } from 'react';
import { Button } from 'semantic-ui-react';
import { MainContent, PriceContent } from './content';
import { Link } from 'react-router-dom';
import { useLoadNavbarContext } from '../../services/hooks';

function LandingPage() {
	const navBarActions = useMemo(
		() => (
			<Button as={Link} primary to='/dashBoard'>
				Go to pay
			</Button>
		),
		[]
	);

	useLoadNavbarContext(navBarActions);

	return (
		<>
			<MainContent />
			<PriceContent />
		</>
	);
}

export default LandingPage;
