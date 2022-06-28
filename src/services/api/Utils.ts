import { IQueryParams } from './../../domain/Api';

class Utils {
	static serializeQueryParams(queryParams?: IQueryParams): string {
		if (!queryParams) {
			return '';
		}

		const queryParamsArray = Object.entries({
			where: queryParams.filters,
			...queryParams.extraParams,
		})
			.map(([key, value]) =>
				!value ? undefined : key === 'where' ? `${key}=${JSON.stringify(value)}` : `${key}=${value}`
			)
			.filter((param) => !!param);

		return !queryParamsArray.length ? '' : `?${queryParamsArray.join('&')}`;
	}
}

export default Utils;
