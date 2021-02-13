import { Core } from 'code/repository/github/core/core';
import { Personal as PersonalData } from 'code/data/personal/personal';
import { Personal as PersonalRepositoryInterface } from 'code/repository/interfaces/personal/personal';
import { DEFAULT_PERSONAL_DATA } from 'code/data/personal/defaults/default-personal-data';
import { HTTPInterface } from 'code/helpers/http/interface/http-interface';

export class Personal extends Core implements PersonalRepositoryInterface {
    private readonly JSON_FILE: string = 'personal/personal.json';

    private language: string = 'pt-br';

    private personalData: PersonalData = DEFAULT_PERSONAL_DATA;

    private requestHandler: HTTPInterface;

    constructor (
        httpInterface: HTTPInterface,
    ) {
        super();

        this.requestHandler = httpInterface;

        this.requestHandler.get(
            this.getUrlPath(),
        ).then(
            data => {
                this.personalData = data;
            },
        )
    }

    public getPersonalData(): PersonalData {
        return this.personalData;
    }

    protected getLanguage(): string {
        return this.language;
    }

    protected getJsonFile(): string {
        return this.JSON_FILE;
    }
}
