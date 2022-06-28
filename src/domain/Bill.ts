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

export interface IBillFilter {
	billId?: number;
	period?: number;
	clientId?: number;
	category?: BillCategory;
	amount?: number;
	status?: BillStatus;
}
