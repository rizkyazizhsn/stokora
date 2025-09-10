import { Filtered } from "@/types/order"
import { ChartLine, ChevronDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { formatNumber } from "@/lib/formaters"

const SalesOverviewCard = ({ data }: { data: Filtered}) => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-sm">
          <ChartLine size={18} className="text-blue-400" />
          <p className="font-semibold">Sales Overview</p>
        </CardTitle>
        <button className="flex items-center gap-2 text-sm border rounded-md px-3 py-1.5 hover:bg-gray-50">
          <span>Sep 4, 2025 - Sep 10, 2025</span>
          <ChevronDown className="size-4" />
        </button>
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