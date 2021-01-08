export abstract class Core {
    private readonly BASE_URL: string = 'https://raw.githubusercontent.com/felipeAraujo/professional-data/main/personal/';

    protected getUrlPath(): string {
        return this.BASE_URL + this.getLanguage() + '/' + this.getJsonFile();
    }

    protected abstract getLanguage(): string;

    protected abstract getJsonFile(): string;
}
