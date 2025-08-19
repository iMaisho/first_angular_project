import { Product, ProductType } from "./product";

export interface DigitalProduct extends Product{
        id: number
    name: string
    type: ProductType

}
