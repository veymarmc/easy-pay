import BaseApi from './BaseApi';
import { IBillFilter, IParams } from './types';

export enum BillCategory {
	water = 'WATER',
	sewer = 'SEWER',
	electricity = 'ELECTRICITY',
}

export enum BillStatus {
	pending = 'PENDING',
	paid = 'PAID',
}

export interface IBill {
	billId: number;
	period: number;
	clientId: number;
	category: BillCategory;
	amount: number;
	status: BillStatus;
	updated: string;
	client: null;
}

export interface IBillCreation {
	period: number;
	category: BillCategory;
}

export interface IBillPayment extends IBillCreation {
	clientId: number;
}

class BillingApi extends BaseApi {
	constructor() {
		super(''); // TODO: this seems to be not necessary
	}

	/**
	 * Get Billings by category
	 * @param category category param to filter the billings
	 */
	async getByCategory(category: BillCategory): Promise<IBill[]> {
		return this.getBillings({ category });
	}

	/**
	 * Get all pending billings per client
	 * @param clientId specific client id
	 */
	async getBillings(
		filters?: IBillFilter,
		extraParams?: IParams,
		cache: boolean = true
	): Promise<IBill[]> {
		return this.get<IBill>('/Bills', { filters, extraParams }, cache);
	}

	async createBill(period: number, category: BillCategory): Promise<void> {
		const payload: IBillCreation = { period, category };
		await this.post<IBillCreation, void>('/bills', payload);
	}

	async payBill(clientId: number, period: number, category: BillCategory): Promise<IBill> {
		const payload: IBillPayment = { clientId, period, category };
		return this.post<IBillPayment, IBill>('/pay', payload);
	}
}

const billingApi = new BillingApi();
export default billingApi;
