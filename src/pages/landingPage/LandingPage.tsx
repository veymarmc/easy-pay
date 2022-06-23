import React, { useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import { MainContent, PriceContent } from './content';
import { useAppDispatch, barActions } from './../../store';
import { Link } from 'react-router-dom';

function LandingPage() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(
			barActions.changeBarActions(
				<Button as={Link} primary to='/dashBoard'>
					Go to pay
				</Button>
			)
		);

		return () => {
			dispatch(barActions.reset());
		};
	}, [dispatch]);

	return (
		<>
			<MainContent />
			<PriceContent />
		</>
	);
}

export default LandingPage;
