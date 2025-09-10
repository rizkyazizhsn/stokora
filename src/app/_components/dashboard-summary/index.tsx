"use client";

import { SummaryCards } from "./summary-card";
import SalesOverviewCard from "./sales-overview";
import MonthlyPerformanceCard from "./monthly-performance";
import { useEffect, useState } from "react";
import { Orders } from "@/types/order";
import { getOrders } from "@/app/actions";
import { INITIAL_ORDERS } from "@/constants/summary-constant";
import LoadingCard from "./loading-card";

const DashboardSummaryCard = () => {
  const [orders, setOrders] = useState<Orders>(INITIAL_ORDERS);
  const [loading, setLoading] = useState<boolean>(true);
  const [dateRange, setDateRange] = useState<{ from: string; to: string }>({
    from: new Date().toISOString().split("T")[0],
    to: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { orders } = await getOrders(dateRange.from, dateRange.to);
        setOrders(orders);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [dateRange]);

  return (
    <>
      {loading ? <LoadingCard /> : (
        <>
        <SummaryCards today={orders?.today} monthly={orders?.monthly} />
        <SalesOverviewCard
          data={orders.filtered}
          dateRange={dateRange}
          onDateRangeChange={(range) => {
            setDateRange({
              from: range?.from?.toISOString().split("T")[0] || "",
              to: range?.to?.toISOString().split("T")[0] || "",
            });
          }}
        />
        <MonthlyPerformanceCard data={orders.yearlySummary} />
        </>
      )}
    </>
  );
};

export default DashboardSummaryCard;
