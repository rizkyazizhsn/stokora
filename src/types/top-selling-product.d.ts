export interface TopSellingProductsResponse {
  data: TopSellingProduct[]
}

export interface TopSellingProduct {
  item_id: number
  item_name: string
  total_sold: number
}