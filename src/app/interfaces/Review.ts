import { ProductModel } from "./productmodel";

export interface Review {
    id: string;
    username: string;
    email: string;
    text: string;
    productId: string | null;
    product: ProductModel | null;
}