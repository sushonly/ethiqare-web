import { createClient } from '@supabase/supabase-js'
import type { Product } from './types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase env vars. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local',
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('sort_order')

  if (error) {
    console.error('Failed to fetch products:', error.message)
    return []
  }

  return (data as Product[]) ?? []
}
