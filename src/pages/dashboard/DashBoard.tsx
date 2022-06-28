import React, { useCallback, useMemo, useState } from 'react';
import { Container, Table, Header, Button, Input, Icon } from 'semantic-ui-react';
import moment from 'moment';
import PayModal from './payModal/PayModal';
import './dashBoard.scss';
import { useGetBillingData } from './hooks';
import { useSetNavBarActions } from './../../services/hooks';
import { billingApi, IBill } from './../../services/api';
import { BillStatus } from '../../services/api/BillingApi';

function DashBoard() {
	const [pendingBills, setPendingBills] = useState(true);
	const [clientId, setClientId] = useState(1);
	const { bills, setBills } = useGetBillingData(pendingBills, clientId);
	const billsOrderderPerDate = useMemo(() => {
		return bills.sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime());
	}, [bills]);

	const disablePendingBills = useCallback(() => {
		setPendingBills(false);
	}, [setPendingBills]);

	const enablePendingBills = useCallback(() => {
		setPendingBills(true);
	}, [setPendingBills]);

	const updateBills = useCallback(
		async (b: IBill) => {
			await billingApi.payBill(b.clientId, b.period, b.category);
			const bs = await billingApi.getBillings(
				{
					clientId: pendingBills ? b.clientId : undefined,
					status: pendingBills ? BillStatus.pending : undefined,
				},
				undefined,
				false
			);

			setBills(bs);
		},
		[pendingBills, setBills]
	);

	useSetNavBarActions(
		<Button.Group>
			<Button color='teal' active={pendingBills} onClick={enablePendingBills}>
				Pending Bills
			</Button>
			<Button.Or text='<>' />
			<Button color='green' active={!pendingBills} onClick={disablePendingBills}>
				Bill History
			</Button>
		</Button.Group>
	);

	return (
		<Container className='dashboard'>
			<>
				<h1 className='inline-b'>{pendingBills ? 'Pending Bills' : 'Bill History'}</h1>
				{pendingBills && (
					<Input
						type='number'
						label='clientId'
						value={clientId}
						onChange={(_, data) => setClientId(parseInt(data.value))}
						min={1}
						placeholder='Client ID'
						focus
						className='dashboard__client-id'
					/>
				)}
				<Table celled padded>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell singleLine>Client ID</Table.HeaderCell>
							<Table.HeaderCell>Category</Table.HeaderCell>
							<Table.HeaderCell>Amount</Table.HeaderCell>
							<Table.HeaderCell>Status</Table.HeaderCell>
							<Table.HeaderCell>Updated</Table.HeaderCell>
							<Table.HeaderCell>Pay</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						{billsOrderderPerDate.map((bill) => (
							<Table.Row>
								<Table.Cell>
									<Header as='h4' textAlign='center'>
										{bill.clientId}
									</Header>
								</Table.Cell>
								<Table.Cell singleLine>
									<Header as='h4'>{bill.category}</Header>
								</Table.Cell>
								<Table.Cell textAlign='right'>
									<Header as='h4'>{bill.amount}</Header>
								</Table.Cell>
								<Table.Cell textAlign='right'>
									<Header as='h4' textAlign='center'>
										{bill.status}
									</Header>
								</Table.Cell>
								<Table.Cell textAlign='right'>
									<Header as='h4'>{moment(bill.updated).format('dddd, MMMM Do YYYY')}</Header>
								</Table.Cell>
								<Table.Cell className='justify-content-c'>
									<PayModal
										bill={bill}
										updateBills={updateBills}
										trigger={
											<Button positive disabled={bill.status !== 'PENDING'}>
												<Icon name='money bill alternate outline' /> Pay
											</Button>
										}
									/>
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			</>
		</Container>
	);
}

export default DashBoard;
