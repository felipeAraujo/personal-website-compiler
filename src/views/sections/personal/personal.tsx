import React from 'react';

import { Personal as PersonalData } from 'code/data/personal/personal';
import { Personal as PersonalRepository } from 'code/repository/interfaces/personal/personal';
import { container } from 'code/di/inversify.config';
import { TYPES } from 'code/di/types';

export class Personal extends React.Component {
    private personalRepo: PersonalRepository;

    constructor(props: any) {
        super(props);

        this.personalRepo = container.get<PersonalRepository>(TYPES.repository.personal);
    }

    personalData(): PersonalData
    {
        return this.personalRepo.getPersonalData();
    }

    render() {
        return (
            <div className="personal">
                <h1>{this.personalData().name}</h1>
            </div>
        );
    }
}