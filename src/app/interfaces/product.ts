export enum ProductType{
    PHYSICAL = "PHYSICAL",
    DIGITAL = "DIGITAL"
}

export interface Product {
    id: number
    name: string
    type: ProductType
}

export interface PhysicalProduct extends Product{
    weight: number
    type: ProductType.PHYSICAL
}


export interface DigitalProduct extends Product{
    downloadUrl: string
    type: ProductType.DIGITAL
}

export type AnyProduct = PhysicalProduct | DigitalProduct

export function getShippingInfo(product: AnyProduct): string{
    if (product.type === ProductType.PHYSICAL){
        return `Expédition du produit pesant ${product.weight}`
    }
    else {
        return `Lien du téléchargement : ${product.downloadUrl}`
    }
}