import { BillCategory, BillStatus } from './BillingApi';

export interface IBillFilter {
	billId?: number;
	period?: number;
	clientId?: number;
	category?: BillCategory;
	amount?: number;
	status?: BillStatus;
}

export interface IParams {
	[key: string]: string;
}

export interface IQueryParams {
	filters?: IBillFilter;
	extraParams?: IParams;
}
