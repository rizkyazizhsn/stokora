"use client"

import { cn } from "@/lib/utils";
import { Monthly, Today } from "@/types/order";
import { Card, CardContent } from "../../../components/ui/card";
import { ChartNoAxesColumn, DollarSign, ShoppingBag } from "lucide-react";

type SummaryCardProps = {
  title: string;
  icon?: React.ReactNode;
  value: number;
  description: string;
  className?: string;
};

export const SummaryCard = ({
  title,
  icon,
  value,
  description,
  className,
}: SummaryCardProps) => {
  return (
    <Card className={cn("shadow-none relative overflow-hidden", className)}>
      <CardContent>
        <div className="size-20 absolute -bottom-10 -left-8 rounded-full bg-white/20" />
        <div className="size-28 absolute -bottom-14 -left-8 rounded-full bg-white/20" />
        <div className="flex justify-between">
          <div className="space-y-1">
            <span className="block text-xs font-medium">{title}</span>
            <h3 className="text-2xl font-semibold">{value}</h3>
            <span className="block text-xs">{description}</span>
          </div>
          <div className="rounded-md bg-white/30 p-2 h-fit">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export const SummaryCards = ({ today, monthly }: { today: Today; monthly: Monthly }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <SummaryCard
        title="Today's Sales"
        icon={<DollarSign size={18} />}
        value={today?.sales || 0}
        description={`${today?.growth.sales_growth || "0%"} from yesterday`}
        className="bg-teal-400 text-white border-l-4 border-l-teal-500 border-teal-500"
      />
      <SummaryCard
        title="Monthly Sales"
        icon={<ChartNoAxesColumn size={18} />}
        value={monthly?.sales || 0}
        description={`${monthly?.growth || "0%"} from last month`}
        className="bg-indigo-500 text-white border-l-4 border-l-indigo-500 border-indigo-500"
      />
      <SummaryCard
        title="Today's Orders"
        icon={<ShoppingBag size={18} />}
        value={today?.orders || 0}
        description={`${today?.growth.order_growth || "0%"} from yesterday`}
        className="bg-orange-400 text-white border-l-4 border-l-orange-500 border-orange-500"
      />
    </div>
  )
}
