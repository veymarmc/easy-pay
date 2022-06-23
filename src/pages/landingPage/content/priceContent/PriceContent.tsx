import React from 'react';
import { Card } from './../../../../components';
import { Button, Label } from 'semantic-ui-react';
import LandingPageItem from '../LandingPageItem';
import './priceContent.scss';

function PriceContent() {
	return (
		<LandingPageItem className='lp-price-content'>
			<h1 className='lp-price-content__title'>Pick the premium plan that works for your budget.</h1>
			<div className='lp-price-content__prices flex justify-content-c'>
				<Card>
					<Card.Section>
						<Label color='green' circular size='huge' className='v-hidden'>
							Best Value
						</Label>
						<p className='lp-price-content__subtitle'>Annual Plan</p>
					</Card.Section>
					<Card.Section>
						<h3>$9.99/mo.</h3>
					</Card.Section>
					<Card.Section>
						<p>A monthly subscription is just $9.99 per month after a free 14-day trial.</p>
					</Card.Section>
					<Card.Section>
						<Button primary size='big'>
							Choose This Plan
						</Button>
					</Card.Section>
				</Card>
				<Card>
					<Card.Section>
						<Label color='green' circular size='huge'>
							Best Value
						</Label>
						<p className='lp-price-content__subtitle'>Monthly Plan</p>
					</Card.Section>
					<Card.Section>
						<h3>$99.99/yr.</h3>
					</Card.Section>
					<Card.Section>
						<p>An annual subscription is $99.99 per year after a free 14-day trial.</p>
					</Card.Section>
					<Card.Section>
						<Button primary size='big'>
							Choose This Plan
						</Button>
					</Card.Section>
				</Card>
			</div>
			<div className='justify-content-c align-items-c'>
				<span>Contact Us:&nbsp;&nbsp;</span>
				<Button circular color='facebook' icon='facebook' />
				<Button circular color='twitter' icon='twitter' />
				<Button circular color='google plus' icon='google plus' />
				<Button circular color='vk' icon='vk' />
				<Button circular color='linkedin' icon='linkedin' />
				<Button circular color='instagram' icon='instagram' />
				<Button circular color='youtube' icon='youtube' />
			</div>
		</LandingPageItem>
	);
}

export default PriceContent;
