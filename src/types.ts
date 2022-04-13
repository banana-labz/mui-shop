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