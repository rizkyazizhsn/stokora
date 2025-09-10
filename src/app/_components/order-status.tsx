"use client"

import { ChartColumn } from "lucide-react";
import { useEffect, useState } from "react";
import { getOrderStatus } from "../actions";
import { OrderStatus } from "@/types/order-status";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";

const OrderStatusCard = () => {
  const [orderStatus, setOrderStatus] = useState<OrderStatus>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchOrderStatus = async () => {
      try {
        const { data } = await getOrderStatus()
        setOrderStatus(data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching order status", error)
      } finally {
        setLoading(false)
      }
    }
    fetchOrderStatus()
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <ChartColumn size={18} className="text-blue-400" />
          <p className="font-semibold">Order Status</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 px-3">
        <div
          className="bg-sky-50 border rounded-lg px-3 divide-y divide-dashed divide-gray-300"
        >
          {/* Unpaid */}
          <div className="flex items-center justify-between gap-2 py-4">
            <div className="flex-1 flex items-center gap-2 min-w-0">
              <div className="size-2 rounded-full bg-orange-400" />
              <p className="font-semibold text-xs truncate">
                Unpaid
              </p>
            </div>
            <div className="flex items-center justify-center rounded-full px-2 py-1 font-medium bg-orange-100 text-orange-400 text-xs">
              {orderStatus?.unpaid.total_orders || 0} Orders
            </div>
          </div>
          {/* Ready to Ship */}
          <div className="flex items-center justify-between gap-2 py-4">
            <div className="flex-1 flex items-center gap-2 min-w-0">
              <div className="size-2 rounded-full bg-indigo-400" />
              <p className="font-semibold text-xs truncate">
                Ready to Ship
              </p>
            </div>
            <div className="flex items-center justify-center rounded-full px-2 py-1 font-medium bg-indigo-100 text-indigo-400 text-xs">
              {orderStatus?.ready_to_ship.total_orders || 0} Orders
            </div>
          </div>
          {/* Processed */}
          <div className="flex items-center justify-between gap-2 py-4">
            <div className="flex-1 flex items-center gap-2 min-w-0">
              <div className="size-2 rounded-full bg-teal-400" />
              <p className="font-semibold text-xs truncate">
                Processed
              </p>
            </div>
            <div className="flex items-center justify-center rounded-full px-2 py-1 font-medium bg-teal-100 text-teal-400 text-xs">
              {orderStatus?.processed.total_orders || 0} Orders
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderStatusCard;
