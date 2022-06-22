import React from 'react';
import { IProps } from './../types';
import './container.scss';

function Container({ children, className }: IProps) {
	return <div className={`container justify-content-sb w-100 ${className}`}>{children}</div>;
}

export default Container;
