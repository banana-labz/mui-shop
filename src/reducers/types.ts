export interface ProductData {
  id: string,
  imageUrl: string,
  name: string,
  price: number,
  rating: number
}

export interface OrderData extends Omit<ProductData, "id"> {
  orderId: string,
  itemId: string
}

export interface CatalogueState {
  items: ProductData[],
  loading: boolean,
  error: Error | null
}

export interface OrderState {
  items: OrderData[],
  cost: number
}

export interface RootState {
  catalogue: CatalogueState,  
  order: OrderState
}