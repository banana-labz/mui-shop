import { ProductData } from "../types"

// using fakestoreapi.com

interface FakeStoreProductData {
  id: number,
  category: string,
  description: string,
  image: string,
  title: string,
  price: number,
  rating: { rate: number, count: number },
}

class ShopService {
  private base = "https://fakestoreapi.com"

  private handleError = (response: Response): Error => (
    new Error(`Could not fetch, recieved ${response.status}`)
  )

  private transformProduct = ({ id, title, price, rating, image }: FakeStoreProductData): ProductData => ({
    id: id.toString(),
    name: title,
    imageUrl: image,
    rating: rating.rate,
    price
  })

  public getAllItems = async () => fetch(`${this.base}/products`)
    .then(response => response.json())
    .catch(this.handleError)
    .then(response => response.map(this.transformProduct))

  public getItem = async (id: number) => fetch(`${this.base}/products/${id}`)
    .then(response => response.json())
    .catch(this.handleError)
    .then(this.transformProduct)
}

const service = new ShopService()

// TEST
/*
service.getAllItems().then(console.log)
service.getItem(18).then(console.log)
*/
export default service