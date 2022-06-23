import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { useAppDispatch, useAppSelector, counterActions } from './../../store';

function Counter() {
	const value = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	return (
		<>
			<div style={{ padding: '1rem' }}>
				<span>Incremented value: {value}</span>
				<br />
				<Button onClick={() => dispatch(counterActions.increment())}>Increment</Button>{' '}
				<Button onClick={() => dispatch(counterActions.decrement())}>Decrement</Button>
			</div>
			<Link to='/home'>Go to home</Link>
		</>
	);
}

export default Counter;
