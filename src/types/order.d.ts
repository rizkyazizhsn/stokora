export interface OrderResponse {
 orders: Orders 
}

export interface Orders {
  today: Today
  monthly: Monthly
  filtered: Filtered
  yearlySummary: YearlySummary[]
}

export interface Today {
  sales: number
  orders: number
  growth: Growth
}

export interface Growth {
  sales_growth: string
  order_growth: string
}

export interface Monthly {
  sales: number
  growth: string
}

export interface Filtered {
  gross_sales: number
  avg_item_discount: string
  avg_order_per_day: number
  avg_order_value: number
  total_discount: number
  orders: number
  items_sold: number
  time_range: TimeRange
}

export interface TimeRange {
  from: string
  to: string
}

export interface YearlySummary {
  month: string
  total_sales: number
  total_orders: number
}
