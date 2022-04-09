import type { ProductData } from "../types"

class ShopService {
    public getItems = (): Promise<ProductData[]> => (
        new Promise((resolve, reject) => {
            try {
                const json = localStorage.getItem("items")
                if (json) {
                    resolve(JSON.parse(json))
                }
            }
            catch (err) {
                reject(new Error("ERROR"))
            }
        })
    )
}

export const Service = new ShopService()