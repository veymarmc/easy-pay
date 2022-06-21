import BaseApi from './BaseApi';

export enum BillingCategory {
	water = 'WATER',
	sewer = 'SEWER',
	electricity = 'ELECTRICITY',
}

export interface IBilling {
	billId: number;
	period: number;
	clientId: number;
	category: BillingCategory;
	amount: number;
	status: string;
	updated: string;
	client: null;
}

export interface IBillingCreation {
	period: number;
	category: BillingCategory;
}

export interface IBillingPayment extends IBillingCreation {
	clientId: number;
}

class BillingApi extends BaseApi {
	constructor() {
		super('/billing');
	}

	/**
	 * Get Billings by category
	 * @param category category param to filter the billings
	 */
	async getByCategory(category: BillingCategory): Promise<IBilling[]> {
		return this.get<IBilling>('/search', { category });
	}

	/**
	 * Get all pending billings per client
	 * @param clientId specific client id
	 */
	async getPendingBillingsByClient(clientId: number): Promise<IBilling[]> {
		return this.get<IBilling>('/search', { ClientId: clientId.toString() });
	}

	async createBill(period: number, category: BillingCategory): Promise<void> {
		const payload: IBillingCreation = { period, category };
		await this.post<IBillingCreation, void>('/bills', payload);
	}

	async payBill(clientId: number, period: number, category: BillingCategory): Promise<IBilling> {
		const payload: IBillingPayment = { clientId, period, category };
		return this.post<IBillingPayment, IBilling>('/pay', payload);
	}
}

const billingApi = new BillingApi();
export default billingApi;
