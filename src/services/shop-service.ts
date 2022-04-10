import type { ProductData } from "../types"

import data from "../data.json"

const STORAGE_SECTION = "items"

if (!localStorage.getItem(STORAGE_SECTION)) {
    localStorage.setItem(STORAGE_SECTION, JSON.stringify(data))
}

class ShopService {
    public getItems = (): Promise<ProductData[]> => (
        new Promise((resolve, reject) => {
            try {
                const json = localStorage.getItem(STORAGE_SECTION)
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