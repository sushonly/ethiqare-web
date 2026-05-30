export type ProductStatus = 'live' | 'coming_soon'

export interface Ingredient {
  name: string
  benefit: string
  emoji: string
}

export interface Product {
  id: string
  name: string
  tagline: string | null
  description: string | null
  category: string | null
  status: ProductStatus
  price: number | null
  mrp: number | null
  size: string | null
  image_url: string | null
  whatsapp_msg: string | null
  amazon_url: string | null
  safe_from_months: number
  sort_order: number
  ingredients: Ingredient[]
  benefits: string[]
  safety_claims: string[]
  created_at: string
  updated_at: string
}

export interface Subscriber {
  id: string
  name: string | null
  email: string
  phone: string | null
  type: 'notify_me' | 'contact'
  product_name: string | null
  message: string | null
  created_at: string
}
