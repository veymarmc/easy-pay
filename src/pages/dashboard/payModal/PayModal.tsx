import React, { ReactNode, useCallback, useState } from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';
import { IBilling, billingApi } from '../../../services/api';
import dolarLogo from './../../../assets/images/dolar-logo.svg';
import './payModal.scss';

interface IPayModalProps {
	trigger: ReactNode;
	bill: IBilling;
	updateBills: (s: IBilling) => void;
}

function PayModal({ trigger, bill, updateBills }: IPayModalProps) {
	const [open, setOpen] = useState(false);
	const payBill = useCallback(async () => {
		setOpen(false);
		await billingApi.payBill(bill.clientId, bill.period, bill.category);
		updateBills(bill);
	}, [updateBills, bill]);

	return (
		<Modal
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={trigger}
			className='pay-modal'
			closeOnEscape={false}
			closeOnDimmerClick={false}
		>
			<Modal.Header className='pay-modal__header'>Confirm Paymen? (read only)</Modal.Header>
			<Modal.Content image className='pay-modal__content'>
				<img src={dolarLogo} className='pay-modal__icon' alt='dolar icon' />
				<Modal.Description>
					<Form size='big'>
						<Form.Field
							label='Client ID'
							control='input'
							placeholder='First name'
							type='number'
							min={1}
							value={bill.clientId}
							readOnly
						/>
						<Form.Dropdown
							label='Type of Service'
							options={optionsServices}
							placeholder='Services'
							value={bill.category}
							fluid
							selection
							readOnly
						/>
						<Form.Input
							label='Month/Year'
							control='input'
							placeholder='YYYYMM'
							type='month'
							className='pay-modal__month'
							value={`${bill.period.toString().substring(0, 4)}-${bill.period
								.toString()
								.substring(4)}`}
							readOnly
						/>
					</Form>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button color='orange' onClick={() => setOpen(false)}>
					cancel
				</Button>
				<Button
					content='Pay your Bill'
					labelPosition='right'
					icon='checkmark'
					onClick={payBill}
					positive
				/>
			</Modal.Actions>
		</Modal>
	);
}

const optionsServices = [
	{
		key: 'WATER',
		text: 'WATER',
		value: 'WATER',
	},
	{
		key: 'SEWER',
		text: 'SEWER',
		value: 'SEWER',
	},
	{
		key: 'ELECTRICITY',
		text: 'ELECTRICITY',
		value: 'ELECTRICITY',
	},
];

export default PayModal;
