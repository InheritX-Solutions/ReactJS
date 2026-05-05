import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios'

class ApiService {
  private api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL || 'https://react-my-burger-a42bc.firebaseio.com',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.initializeInterceptors()
  }

  private initializeInterceptors() {
    this.api.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )

    this.api.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )
  }

  public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.api.get(url, config).then(response => response.data)
  }

  public post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return this.api.post(url, data, config).then(response => response.data)
  }

  public put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return this.api.put(url, data, config).then(response => response.data)
  }

  public delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.api.delete(url, config).then(response => response.data)
  }
}

export const api = new ApiService()
