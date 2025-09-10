"use client"

import { useEffect, useState } from "react"
import { format } from "date-fns"
import { Filtered } from "@/types/order"
import { DateRange } from "react-day-picker"
import { formatNumber } from "@/lib/formaters"
import { ChartLine, ChevronDown } from "lucide-react"
import DateRangePicker from "@/components/common/date-picker"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"

type SalesOverviewCardProps = {
  data: Filtered;
  dateRange: { from: string; to: string };
  onDateRangeChange: (range: DateRange) => void;
};

const SalesOverviewCard = ({ data, dateRange, onDateRangeChange }: SalesOverviewCardProps) => {
  const [range, setRange] = useState<DateRange>({ from: new Date(), to: new Date() });
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);


  useEffect(() => {
    setRange({
      from: new Date(dateRange.from),
      to: new Date(dateRange.to),
    });
  }, [dateRange]);

  const handleDateRangeChange = (range: DateRange) => {
    setRange(range);
    setIsPopoverOpen(false);
    onDateRangeChange(range);
  }
  return (
    <Card>
      <CardHeader className="flex flex-col md:flex-row md:items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-sm">
          <ChartLine size={18} className="text-blue-400" />
          <p className="font-semibold">Sales Overview</p>
        </CardTitle>
        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
          <PopoverTrigger asChild>
            <button className="flex items-center mt-4 md:mt-0 w-full gap-2 text-sm border rounded-md px-3 py-1.5 hover:bg-gray-50 cursor-pointer">
              <span>{range?.from ? format(range.from, "d / M / yyyy") : ""} - {range?.to ? format(range.to, "d / M / yyyy") : ""}</span>
              <ChevronDown className="size-4" />
            </button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-full p-0">
            <DateRangePicker initialRange={range} onClick={handleDateRangeChange} onCancel={() => setIsPopoverOpen(false)} />
          </PopoverContent>
        </Popover>
      </CardHeader>
      <CardContent>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm text-gray-700 py-4">
        <div>
          <p className="uppercase text-xs text-gray-400 mb-1">Gross Sales</p>
          <p className="text-lg font-semibold text-gray-900">{formatNumber(data.gross_sales)}</p>
        </div>

        <div>
          <p className="uppercase text-xs text-gray-400 mb-1">Orders</p>
          <p className="text-lg font-semibold text-gray-900">{formatNumber(data.orders)}</p>
        </div>

        <div>
          <p className="uppercase text-xs text-gray-400 mb-1">Items Sold</p>
          <p className="text-lg font-semibold text-gray-900">{formatNumber(data.items_sold)}</p>
        </div>

        <div>
          <p className="uppercase text-xs text-gray-400 mb-1">Avg. Order Value</p>
          <p className="text-lg font-semibold text-gray-900">{formatNumber(data.avg_order_value)}</p>
        </div>

        <div>
          <p className="uppercase text-xs text-gray-400 mb-1">Avg. Order/Day</p>
          <p className="text-lg font-semibold text-gray-900">{formatNumber(data.avg_order_per_day)}</p>
        </div>

        <div>
          <p className="uppercase text-xs text-gray-400 mb-1">Avg. Item Discount</p>
          <p className="text-lg font-semibold text-gray-900">{data.avg_item_discount}</p>
        </div>
      </div>
      </CardContent>
    </Card>
  )
}

export default SalesOverviewCard