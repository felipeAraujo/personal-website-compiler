import { Personal as PersonalData } from 'code/data/personal/interface/personal';

export interface Personal {
    updateData(): void;
    addNotification(callable: ((data: PersonalData) => void)): void;
    setLanguage(language: string): void;
}
