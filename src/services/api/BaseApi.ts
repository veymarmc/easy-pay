import axios, { AxiosInstance, AxiosAdapter } from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';
import { BASE_URL, HEADERS } from '../../config/config';
import { IQueryParams } from './../../domain';
import Utils from './Utils';

interface DataResults<T> {
	results: Array<T>;
}

class BaseApi {
	private client: AxiosInstance;

	constructor() {
		this.client = axios.create({
			baseURL: BASE_URL,
			adapter: cacheAdapterEnhancer(axios.defaults.adapter as AxiosAdapter),
			headers: HEADERS,
		});
	}

	/**
	 * get http request
	 * @param resource specific path to the resource to retrieve.
	 * @returns A promise with the resource to retrieve.
	 */
	async get<T>(resource: string, queryParams?: IQueryParams, cache: boolean = true): Promise<T[]> {
		const { data } = await this.client.get<DataResults<T>>(
			`${resource}${Utils.serializeQueryParams(queryParams)}`,
			{ cache }
		);

		return data.results;
	}

	/**
	 * get/:id http request
	 * @param resource specific path to the resource to retrieve.
	 * @param id specific resource to retrieve
	 * @returns A promise with the single resource to retrieve
	 */
	async getSingle<T>(resource: string, id: string): Promise<T> {
		const { data } = await this.client.get<T>(`${resource}`);
		return data;
	}

	/**
	 * post http request
	 * @param resource specific path to the resource to apply
	 * @param payload The necessary required payload
	 * @returns the produced data if retrieved.
	 */
	async post<D, T>(resource: string, payload: D): Promise<T> {
		const { data } = await this.client.post<T>(`${resource}`, payload);
		return data;
	}
}

export default BaseApi;
