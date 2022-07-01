import React from 'react';
import { IProps } from './../types';
import './tableWrapper.scss';

/**
 * Make the THEAD section of the table fixed and provides a scroll through its content.
 * Also add special styles to the scroll-bar.
 */
function TableWrapper({ children, className }: IProps) {
	return <div className={`table-wrapper ${className}`}>{children}</div>;
}

export default TableWrapper;
