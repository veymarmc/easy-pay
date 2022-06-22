import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector, counterActions } from './../../store';

function Counter() {
	const value = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	return (
		<>
			<div style={{ padding: '1rem' }}>
				<span>Incremented value: {value}</span>
				<br />
				<button onClick={() => dispatch(counterActions.increment())}>Increment</button>{' '}
				<button onClick={() => dispatch(counterActions.decrement())}>Decrement</button>
			</div>
			<Link to='/home'>Go to home</Link>
		</>
	);
}

export default Counter;
