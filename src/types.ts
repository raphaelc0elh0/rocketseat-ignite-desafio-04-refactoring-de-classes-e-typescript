export type FoodType = {
  id: number
  name: string
  description: string
  price: string
  available: boolean
  image: string
}

export type FoodInput = Pick<FoodType, "name" | "description" | "price" | "image">
