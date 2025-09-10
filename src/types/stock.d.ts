
export interface StockResponse {
  data: Stock[]
}

export interface Stock {
  id: number
  item_name: string
  model_sku: string
  total_available_stock: number
}