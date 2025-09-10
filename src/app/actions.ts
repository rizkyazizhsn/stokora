import { api } from "@/services/client"
import { StockResponse } from "@/types/stock"
import { OrderResponse } from "@/types/order"
import { OrderStatusResponse } from "@/types/order-status"
import { TopSellingProductsResponse } from "@/types/top-selling-product"

/**
 * @description Get orders from the API
 * @param time_from - Start time
 * @param time_to - End time
 * @returns Promise<OrderResponse>
 */
export const getOrders = async (time_from: string, time_to: string): Promise<OrderResponse> => {
  try {
    const { data } = await api.get<OrderResponse>("/orders", {
      params: {
        time_from,
        time_to 
      }
    })
    return data
  } catch (error) {
    console.error("Error fetching orders", error);
    throw error
  }
}

/**
 * @description Get order status from the API
 * @returns Promise<OrderStatusResponse>
 */
export const getOrderStatus = async (): Promise<OrderStatusResponse> => {
  try {
    const { data } = await api.get<OrderStatusResponse>("/order-status")
    return data
  } catch (error) {
    console.error("Error fetching order status", error);
    throw error
  }
}

/**
 * @description Get item stocks from the API
 * @returns Promise<ItemStockResponse>
 */
export const getItemStocks = async (): Promise<StockResponse> => {
  try {
    const { data } = await api.get<StockResponse>("/item-stock")
    return data
  } catch (error) {
    console.error("Error fetching item stocks", error);
    throw error
  }
}

/**
 * @description Get top selling products from the API
 * @returns Promise<TopSellingProductsResponse>
 */
export const getTopSellingProducts = async (): Promise<TopSellingProductsResponse> => {
  try {
    const { data } = await api.get<TopSellingProductsResponse>("/top-selling-products")
    return data
  } catch (error) {
    console.error("Error fetching top selling products", error);
    throw error
  }
}