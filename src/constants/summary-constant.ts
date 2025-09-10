import { Orders } from "@/types/order";

export const INITIAL_ORDERS: Orders = {
  today: {
    sales: 0,
    orders: 0,
    growth: {
      sales_growth: "0%",
      order_growth: "0%",
    },
  },
  monthly: {
    sales: 0,
    growth: "0%",
  },
  filtered: {
    gross_sales: 0,
    avg_item_discount: "0%",
    avg_order_per_day: 0,
    avg_order_value: 0,
    total_discount: 0,
    orders: 0,
    items_sold: 0,
    time_range: {
      from: "",
      to: "",
    },
  },
  yearlySummary: [
    {
      month: "",
      total_sales: 0,
      total_orders: 0,
    },
    {
      month: "",
      total_sales: 0,
      total_orders: 0,
    },
    {
      month: "",
      total_sales: 0,
      total_orders: 0,
    },
  ],
}
