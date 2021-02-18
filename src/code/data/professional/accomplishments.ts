export interface Accomplishments {
    publications: Publication[];
    'honors&awards': HonorAward[];
}

interface Publication {
    title: string;
    authors: string[];
    orienting: string[];
}

interface HonorAward {
    name: string;
}
