import { useEffect, useState } from 'react';
import { IBilling, billingApi } from './../../services/api';

export function useGetBillingData(pending: boolean, clientId: number) {
	const [billings, setBillings] = useState<IBilling[]>([]);

	useEffect(() => {
		async function getApi() {
			const bs = await billingApi.getBillings({
				clientId: pending ? clientId.toString() : '',
				status: pending ? 'PENDING' : '',
			});

			setBillings(bs);
		}

		getApi();
	}, [clientId, pending]);

	return { bills: billings, setBills: setBillings };
}
