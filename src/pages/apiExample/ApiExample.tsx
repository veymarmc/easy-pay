import React, { useEffect, useState } from 'react';
import { BillingCategory, IBilling } from '../../services/api/BillingApi';
import { billingApi } from './../../services/api';

function ApiExample() {
	const [data, setData] = useState({});

	useEffect(() => {
		async function stablishData() {
			const data: IBilling[] = await billingApi.getByCategory(BillingCategory.electricity);
			setData(data);
		}

		stablishData();
	}, []);

	return (
		<div>
			This is the recovered data:
			<div>
				<pre>{JSON.stringify(data, null, 2)}</pre>
			</div>
		</div>
	);
}

export default ApiExample;
