"use client";

import { SummaryCards } from "./summary-card";
import SalesOverviewCard from "./sales-overview";
import MonthlyPerformanceCard from "./monthly-performance";
import { useEffect, useState } from "react";
import { Orders } from "@/types/order";
import { getOrders } from "@/app/actions";
import { INITIAL_ORDERS } from "@/constants/summary-constant";

const DashboardSummary = () => {
  const [orders, setOrders] = useState<Orders>(INITIAL_ORDERS);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const now = new Date();
        const todayStr = now.toISOString().split("T")[0];

        const { orders } = await getOrders(todayStr, todayStr);
        setOrders(orders);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);
  return (
    <>
      <SummaryCards today={orders?.today} monthly={orders?.monthly} />
      <SalesOverviewCard data={orders.filtered} />
      <MonthlyPerformanceCard data={orders.yearlySummary} />
    </>
  );
};

export default DashboardSummary;
