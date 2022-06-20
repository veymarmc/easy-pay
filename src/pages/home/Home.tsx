import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from './../../store';
import logo from './../../assets/images/logo.svg';
import './home.css';

function Home() {
	const value = useAppSelector((state) => state.counter.value);

	return (
		<div className='home'>
			<header className='home-header'>
				<img src={logo} className='home-logo' alt='logo' />
				<p>
					Edit <code>src/home.tsx</code> and save to reload.
				</p>
				<a
					className='home-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
				<br />
				<span>This is the value of the counter: {value}</span>
				<br />
				<Link to='/counter'>Go to counter</Link>
			</header>
		</div>
	);
}

export default Home;
