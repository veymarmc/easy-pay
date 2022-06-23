import axios, { AxiosInstance, AxiosAdapter } from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';
import { IQueryParams } from './types';
import utils from './Utils';

class BaseApi {
	// TODO use environment variables for BASE_URL.
	/**
	 * Base url to make all requests.
	 */
	private BASE_URL = 'https://localhost:5001';
	/**
	 * http axios client instance.
	 */
	private client: AxiosInstance;

	constructor(baseResource: string = '') {
		this.client = axios.create({
			baseURL: this.BASE_URL + baseResource,
			adapter: cacheAdapterEnhancer(axios.defaults.adapter as AxiosAdapter),
		});
	}

	/**
	 * get http request
	 * @param resource specific path to the resource to retrieve.
	 * @returns A promise with the resource to retrieve.
	 */
	async get<T>(resource: string, queryParams?: IQueryParams, cache: boolean = true): Promise<T[]> {
		const { data } = await this.client.get<T[]>(
			`${resource}${utils.serializeQueryParams(queryParams)}`,
			{ cache }
		);
		return data;
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
	async post<M, T>(resource: string, payload: M): Promise<T> {
		const { data } = await this.client.post<T>(`${resource}`, payload);
		return data;
	}
}

export default BaseApi;
