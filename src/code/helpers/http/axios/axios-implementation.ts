import axios, { AxiosResponse } from 'axios';
import { HTTPInterface } from 'code/helpers/http/interface/http-interface'

export class AxiosImplementation implements HTTPInterface {
    public async get(url: string): Promise<any> {
        const response: AxiosResponse = await axios.get(url);

        return response.data;
    }
}