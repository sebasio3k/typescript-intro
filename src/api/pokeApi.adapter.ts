import axios from "axios";

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    const resp = fetch(url);
    const data: T = await (await resp).json();
    console.log("Con Fetch");
    return data;
  }
}

export class PokeApiAdapter implements HttpAdapter {
  private readonly axios = axios;

  async get<T>(url: string): Promise<T> {
    //Petición get
    const { data } = await this.axios.get<T>(url);
    console.log('Con Axios');
    return data;
  }

  async post(url: string, data: any) {
    //Petición get
    return;
  }

  async patch(url: string, data: any) {
    //Petición get
    return;
  }

  async delete(url: string) {
    //Petición get
    return;
  }
}
