import { useEffect, useState } from 'react';
import { BillStatus } from '../../services/api/BillingApi';
import { IBill, billingApi } from './../../services/api';

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
