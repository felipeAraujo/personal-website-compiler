import axios, { AxiosResponse } from 'axios';
import { injectable } from 'inversify';

import { HTTPInterface } from 'code/helpers/http/interface/http-interface'

@injectable()
export class AxiosImplementation implements HTTPInterface {
    public async get(url: string): Promise<any> {
        const response: AxiosResponse = await axios.get(url);

        return response.data;
    }
}