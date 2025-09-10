import { OrderStatus } from "@/types/order-status";

export const ORDER_STATUS: OrderStatus = {
  unpaid: {
    total_orders: 120,
    total_buyers: 115,
    total_amount: 35000000,
  },
  ready_to_ship: {
    total_orders: 240,
    total_buyers: 230,
    total_amount: 87000000,
  },
  processed: {
    total_orders: 180,
    total_buyers: 175,
    total_amount: 62000000,
  },
  shipped: {
    total_orders: 300,
    total_buyers: 290,
    total_amount: 125000000,
  },
  completed: {
    total_orders: 420,
    total_buyers: 400,
    total_amount: 210000000,
  },
};