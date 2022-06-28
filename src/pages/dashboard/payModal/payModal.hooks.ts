import { useCallback, useMemo, useState } from 'react';
import { IBill } from '../../../domain';
import { billingApi } from '../../../services/api';

export function usePayModalLogic(bill: IBill, updateBills: (s: IBill) => void) {
	const [open, setOpen] = useState(false);
	const payBill = useCallback(async () => {
		setOpen(false);
		await billingApi.payBill(bill.clientId, bill.period, bill.category);
		updateBills(bill);
	}, [updateBills, bill]);
	const monthValue = useMemo(
		() => `${bill.period.toString().substring(0, 4)}-${bill.period.toString().substring(4)}`,
		[bill.period]
	);
	const closeModal = useCallback(() => setOpen(false), [setOpen]);
	const openModal = useCallback(() => setOpen(true), [setOpen]);

	return { open, payBill, monthValue, closeModal, openModal };
}
