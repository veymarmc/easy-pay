import { IBillFilter } from './Bill';

export interface IParams {
	[key: string]: string;
}

export interface IQueryParams {
	filters?: IBillFilter;
	extraParams?: IParams;
}
