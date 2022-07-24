import axios, { Axios, AxiosRequestConfig, AxiosResponse } from 'axios'
import { API_URL } from '@/shared/config'
import { getStorageValue } from '@/shared/libs'

const refreshToken = () => {
  console.log('refresh token')
}

interface IClientBuilder {
  setBaseUrl(url: string): this
  withHeaders(headers: any): this
  withToken(token: string): this
  build(): Client
}

class Client {
  headers: any
  executor: Axios

  constructor(
    baseUrl: string | undefined,
    headers: any,
    token: string | undefined
  ) {
    this.executor = axios.create({
      baseURL: baseUrl,
      ...(headers && {
        headers
      })
    })

    this.executor.interceptors.request.use(request => {
      return request;
    }, error => Promise.reject(error));
    
    // Configure incoming response interceptor logic
    this.executor.interceptors.response.use(response => {
      return response;
    }, error => Promise.reject(error));

    if (token) {
      axios.interceptors.request.use(
        (config: AxiosRequestConfig) => {
          console.log(config)
          config.headers.Authorization = `Bearer ${token}`
          return config
        },
        (error) => {
          return Promise.reject(error)
        }
      )

      // axios.interceptors.response.use(
      //   (response) => {
      //     return response
      //   },
      //   (error) => {
      //     if (error.response.status == 403) {
      //       refreshToken()
      //     }
      //   }
      // )
    }
  }

  post = async (endpoint, data) => {
    const request = {
      url: endpoint,
      method: 'POST',
      data
    }

    try {
      const res = await this.executor(request)
      return res.data.data
    } catch (error) {
      throw new Error(error.message)
    }
  }

  get = async (endpoint, params) => {
    const request = {
      url: endpoint,
      method: 'GET',
      ...(params && { params })
    }

    try {
      const res = await this.executor(request)
      return res.data.data
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export class ClientBuilder implements IClientBuilder {
  protected baseUrl!: string
  protected token!: string | undefined
  protected headers!: any | undefined

  setBaseUrl = (url: string) => {
    this.baseUrl = url
    return this
  }

  withHeaders = (headers: any) => {
    this.headers = headers
    return this
  }

  withToken = (token: string) => {
    this.token = token
    return this
  }

  build = () => {
    return new Client(this.baseUrl, this.headers, this.token)
  }
}

export const service = new ClientBuilder()
  .setBaseUrl(API_URL)
  .withHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    'Content-type': 'application/json',
    'My-Custom-Header': 'test'
  })
  .withToken(getStorageValue('localStorage', 'access__token'))
  .build()
