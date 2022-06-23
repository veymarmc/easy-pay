import React from 'react';
import { Container } from 'semantic-ui-react';
import { IProps } from './../../../components';

interface ILPItemProps extends IProps {
	/**
	 * additional classes to apply to the used semantic ui container component.
	 */
	containerClass?: string;
}

function LandingPageItem({ children, className, containerClass }: ILPItemProps) {
	return (
		<div className={className ? className : ''}>
			{/* <Container className='flex justify-content-c'> */}
			<Container className={containerClass ? containerClass : ''}>{children}</Container>
		</div>
	);
}

export default LandingPageItem;
