import { IQueryParams } from './types';

class Utils {
	serializeQueryParams(queryParams: IQueryParams = {}): string {
		const entries = Object.entries(queryParams);

		return entries.length === 0
			? ''
			: '?' + entries.map(([key, value]) => `${key}=${value}`).join('&');
	}
}

const utils = new Utils();

export default utils;
