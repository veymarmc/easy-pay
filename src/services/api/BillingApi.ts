import BaseApi from './BaseApi';
import {
	BillCategory,
	IBill,
	IBillCreation,
	IBillFilter,
	IBillPayment,
	IParams,
} from './../../domain';

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
		return this.get<IBill>('/classes/Bills', { filters, extraParams }, cache);
	}

	async createBill(period: number, category: BillCategory): Promise<void> {
		const payload: IBillCreation = { period, category };
		await this.post<IBillCreation, void>('/bills', payload);
	}

	async payBill(clientId: number, period: number, category: BillCategory): Promise<void> {
		const payload: IBillPayment = { clientId, period, category };
		return this.post<IBillPayment, void>('/functions/payBill', payload);
	}
}

const billingApi = new BillingApi();
export default billingApi;
