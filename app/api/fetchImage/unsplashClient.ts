import axios, { AxiosInstance } from 'axios';
import { GetRandomPhotoResponse } from '../types';

export class UnsplashClient {
  private axiosInstance: AxiosInstance;

  constructor(clientId: string) {
    this.axiosInstance = axios.create({
      baseURL: this.getBaseUrl(),
      headers: {
        Authorization: `Client-ID ${clientId}`,
      },
    });
  }

  private getBaseUrl() {
    return 'https://api.unsplash.com';
  }

  private createFetchRandomImageQS({
    topics = [],
    query = '',
    count = 1,
  }: {
    topics?: string[];
    query?: string;
    count?: number;
  }): string {
    const params = new URLSearchParams();

    if (topics.length > 0) {
      params.append('topics', topics.join(','));
    }
    if (query) {
      params.append('query', query);
    }
    params.append('count', count.toString());

    return params.toString();
  }

  public async fetchRandomImage({
    topics = [],
    query = '',
    count = 1,
  }: {
    topics?: string[];
    query?: string;
    count?: number;
  } = {}) {
    const queryString = this.createFetchRandomImageQS({
      topics,
      query,
      count,
    });

    const result = await this.axiosInstance.get<GetRandomPhotoResponse | GetRandomPhotoResponse[]>(
      `/photos/random?${queryString}`,
    );
    const { data } = result;
    let photoData: GetRandomPhotoResponse;
    if (Array.isArray(data)) {
      photoData = data[0];
    } else {
      photoData = data;
    }

    const { slug, description, urls } = photoData;

    return {
      slug,
      description,
      imageUrl: urls?.full || urls?.regular || urls?.raw || urls?.small || urls?.thumb,
    };
  }
}
