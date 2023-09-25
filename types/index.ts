export interface productType {
    _id: string;
    title: string;
    type?: string;
    category?: string;
    gender?: string;
    desc?: string;
    price: number;
    images: string[]
    count?: number
}
export interface productCard {
    id: string;
    title: string;
    imageSrc: string;
    price: number;
}