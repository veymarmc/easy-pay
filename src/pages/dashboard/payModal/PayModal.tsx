import React, { ReactNode } from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';
import { IBill, BillCategory } from '../../../domain';
import dolarLogo from './../../../assets/images/dolar-logo.svg';
import { usePayModalLogic } from './payModal.hooks';
import './payModal.scss';

const serviceOptions = Object.values(BillCategory).map((value) => ({
	key: value,
	text: value,
	value: value,
}));

interface IPayModalProps {
	/**
	 * Element when clicked will fire to show the modal.
	 */
	trigger: ReactNode;
	/**
	 * The current selected bill to pay
	 */
	bill: IBill;
	/**
	 * Update the bills list refreshing the current changes.
	 */
	updateBills: (s: IBill) => void;
}

function PayModal({ trigger, bill, updateBills }: IPayModalProps) {
	const { open, payBill, monthValue, closeModal, openModal } = usePayModalLogic(bill, updateBills);

	return (
		<Modal
			className='pay-modal'
			closeOnDimmerClick={false}
			closeOnEscape={false}
			onClose={closeModal}
			onOpen={openModal}
			open={open}
			trigger={trigger}
		>
			<Modal.Header className='pay-modal__header'>Confirm Paymen? (read only)</Modal.Header>
			<Modal.Content image className='pay-modal__content'>
				<img src={dolarLogo} className='pay-modal__icon' alt='dolar icon' />
				<Modal.Description>
					<Form size='big'>
						<Form.Field
							control='input'
							label='Client ID'
							min={1}
							placeholder='First name'
							readOnly
							type='number'
							value={bill.clientId}
						/>
						<Form.Dropdown
							fluid
							label='Type of Service'
							options={serviceOptions}
							placeholder='Services'
							readOnly
							selection
							value={bill.category}
						/>
						<Form.Input
							className='pay-modal__month'
							control='input'
							label='Month/Year'
							placeholder='YYYYMM'
							readOnly
							type='month'
							value={monthValue}
						/>
					</Form>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button color='orange' onClick={closeModal}>
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

export default PayModal;
