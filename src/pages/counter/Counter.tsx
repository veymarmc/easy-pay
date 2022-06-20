import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector, counterActions } from './../../store';

function Counter() {
	const value = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	return (
		<>
			<div style={{ padding: '1rem' }}>
				<span>Incremented value: {value}</span>
				<br />
				<Button variant='contained' onClick={() => dispatch(counterActions.increment())}>
					Increment
				</Button>{' '}
				<Button variant='contained' onClick={() => dispatch(counterActions.decrement())}>
					Decrement
				</Button>
			</div>
			<Link to='/home'>Go to home</Link>
		</>
	);
}

export default Counter;
