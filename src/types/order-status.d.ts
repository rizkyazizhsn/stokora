
export type SummeryOrderStatus = {
  total_orders: number;
  total_buyers: number;
  total_amount: number;
}

export type OrderStatus = {
  unpaid: SummeryOrderStatus;
  ready_to_ship: SummeryOrderStatus;
  processed: SummeryOrderStatus;
  shipped: SummeryOrderStatus;
  completed: SummeryOrderStatus;
}

export interface OrderStatusResponse {
  data: OrderStatus
}
