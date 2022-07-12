export interface Personal {
    name: string;
    role: string;
    country: string;
    state: string;
    city: string;
    img: string;
    description: string;
    websites: Websites;
    skills: string[];
    languages: string[];
}

interface Websites {
    personal: string;
    linkedin: string;
    github: string;
    bitbucket: string;
    gitlab: string;
    blog: string;
}
