export interface productType {
    _id: string;
    title: string;
    type?: string;
    category?: string;
    gender?: string;
    desc?: string;
    price: number;
    images: string[];
    count?: number;
    inCart?: boolean;
    inWishlist?: boolean;
}
export interface productCardType {
    id: string;
    title: string;
    imageSrc: string;
    price: number;
}