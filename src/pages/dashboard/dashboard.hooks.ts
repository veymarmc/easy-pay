import { useEffect, useState } from 'react';
import { BillStatus, IBill } from '../../domain';
import { billingApi } from '../../services/api';

/**
 * Get the bill data
 * @param pending for recovering only pending bills
 * @param clientId for recovering the bills.
 * @returns the recovered bills and the state function to update them.
 */
export function useGetBillingData(pending: boolean, clientId: number) {
	const [billings, setBillings] = useState<IBill[]>([]);

	useEffect(() => {
		async function getApi() {
			const bs = await billingApi.getBillings({
				clientId: pending ? clientId : undefined,
				status: pending ? BillStatus.pending : undefined,
			});

			setBillings(bs);
		}

		getApi();
	}, [clientId, pending]);

	return { bills: billings, setBills: setBillings };
}
