export interface HTTPInterface {
    get(url: string): Promise<any>;
}
