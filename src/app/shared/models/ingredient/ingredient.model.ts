import { Category } from "../category/category.model"

export interface Ingredient {
  name: string
  description: string
  lcategory: string
  category?: Category
}
