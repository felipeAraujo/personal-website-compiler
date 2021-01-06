export interface Accomplishments {
    publications: Publication[];
    "honors&awards": HonorsAwards[];
}

interface Publication {
    title: string;
    authors: string[];
    orienting: string[];
}

interface HonorsAwards {
    name: string;
}