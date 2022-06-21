import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = 'https://localhost:5001/billing/search?category=ELECTRICITY';

function ApiExample() {
	const [data, setData] = useState({});

	useEffect(() => {
		axios.get(apiUrl).then((response) => {
			setData(response.data);
		});
	});

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
