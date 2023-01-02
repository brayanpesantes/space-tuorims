export interface IDestination{
    name: string;
    images: Image
    description: string;
    distance: string;
    travel: string;
}

export type Image={
    png: string;
    webp: string;
}