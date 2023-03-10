import axios from 'axios';
import { ResultWithValue } from '../contracts/results/resultWithValue';
import { anyObject } from '../helper/typescriptHacks';

declare global {
  interface Window { config: any }
}

export class BaseApiService {
  private _baseUrl: String = window.config?.apiUrl ?? 'https://api.nmsassistant.com';
  constructor(newBaseUrl?: String) {
    if (newBaseUrl != null) this._baseUrl = newBaseUrl;
  }
  protected async get<T>(url: string): Promise<ResultWithValue<T>> {
    try {
      const result = await axios.get<T>(`${this._baseUrl}/${url}`);
      return {
        isSuccess: true,
        value: result.data,
        errorMessage: ''
      }
    } catch (ex) {
      return {
        isSuccess: false,
        value: anyObject,
        errorMessage: (ex as any).message
      }
    }
  }

  protected async post<T, TK>(url: string, data: TK, customMapper?: (data: any) => any): Promise<ResultWithValue<T>> {
    try {
      const result = await axios.post<T>(`${this._baseUrl}/${url}`, data);
      if (customMapper != null) return customMapper(result);
      return {
        isSuccess: true,
        value: result.data,
        errorMessage: ''
      }
    } catch (ex) {
      return {
        isSuccess: false,
        value: anyObject,
        errorMessage: (ex as any).message
      }
    }
  }
}
