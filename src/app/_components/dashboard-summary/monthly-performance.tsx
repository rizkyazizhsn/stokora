"use client"

import { ChartColumn } from "lucide-react";
import { YearlySummary } from "@/types/order";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const MonthlyPerformanceCard = ({ data }: { data: YearlySummary[] }) => {
  const chartData = data.map((item) => {
    const date = new Date(item.month + "-01");
    return {
      month: date.toLocaleString('en-US', { month: 'short' }),
      sales: item.total_sales / 1_000_000,
    };
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <ChartColumn size={18} className="text-blue-400" />
          <p className="flex items-center gap-2">
            <span className="font-semibold">Monthly Performance</span>
            <span className="text-xs font-normal text-gray-500">(2025)</span>
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350} className={"focus:outline-none focus:ring-0"}>
          <AreaChart data={chartData} margin={{ top: 20, right: 0, left: 0, bottom: 20 }}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={(value) => `${value}M`}
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip formatter={(value) => `${value}M`} />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#3b82f6"
              fillOpacity={1}
              fill="url(#colorSales)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default MonthlyPerformanceCard;
