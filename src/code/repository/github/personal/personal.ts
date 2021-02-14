import { Core } from 'code/repository/github/core/core';
import { Personal as PersonalData } from 'code/data/personal/interface/personal';
import { Personal as PersonalRepositoryInterface } from 'code/repository/interfaces/personal/personal';
import { DEFAULT_PERSONAL_DATA } from 'code/data/personal/defaults/default-personal-data';
import { HTTPInterface } from 'code/helpers/http/interface/http-interface';

export class Personal extends Core implements PersonalRepositoryInterface {
    private readonly JSON_FILE: string = 'personal/personal.json';

    private language: string = 'pt-br';

    private personalData: PersonalData = DEFAULT_PERSONAL_DATA;

    private requestHandler: HTTPInterface;

    private notifications: ((data: PersonalData) => void)[] = [];

    constructor (
        httpInterface: HTTPInterface,
    ) {
        super();

        this.requestHandler = httpInterface;
    }

    public addNotification(callable: ((data: PersonalData) => void)) {
        this.notifications.push(callable);
    }

    public updateData(): void
    {
        this.requestHandler.get(
            this.getUrlPath(),
        ).then(
            (data: PersonalData) => {
                this.personalData = data;
                this.notify(this.personalData);
            },
        )
    }

    protected getLanguage(): string {
        return this.language;
    }

    protected getJsonFile(): string {
        return this.JSON_FILE;
    }

    private notify(data: PersonalData): void
    {
        this.notifications.forEach(
            (callbackfn: (data: PersonalData) => void) => callbackfn(data),
        );
    }
}
