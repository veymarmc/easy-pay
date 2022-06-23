import { IQueryParams } from './types';

class Utils {
	serializeQueryParams(queryParams: IQueryParams = {}): string {
		const queryParamsArray = Object.entries(queryParams)
			.map(([key, value]) => (value !== '' ? `${key}=${value}` : ''))
			.filter((param) => !!param);

		return queryParamsArray.length === 0 ? '' : '?' + queryParamsArray.join('&');
	}
}

const utils = new Utils();

export default utils;
