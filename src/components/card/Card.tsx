import React from 'react';
import { IProps } from '..';
import Section from './Section';
import './card.scss';

function Card({ children, className }: IProps) {
	return <div className={`plain-card ${className ? className : ''}`}>{children}</div>;
}

Card.Section = Section;

export default Card;
