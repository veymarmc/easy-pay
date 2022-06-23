import React from 'react';
import { IProps } from './../';

function Section({ children, className }: IProps) {
	return <div className={`section ${className ? className : ''}`}>{children}</div>;
}

export default Section;
