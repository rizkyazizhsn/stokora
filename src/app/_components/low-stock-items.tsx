"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { Box } from "lucide-react";
import { Stock } from "@/types/stock";
import { getItemStocks } from "../actions";
import { useEffect, useState } from "react";

const LowStockItemsCard = () => {
  const [stocks, setStocks] = useState<Stock[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOrderStatus = async () => {
      try {
        const { data } = await getItemStocks();
        setStocks(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stocks", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrderStatus();
  }, []);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <Box size={18} className="text-red-400" />
          <p className="font-semibold">Low Stock Items</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 px-3">
        {stocks?.map((stock, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2"
          >
            <div className="flex-1 min-w-0">
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className="font-semibold text-sm truncate">
                    {stock.item_name}
                  </p>
                </TooltipTrigger>
                <TooltipContent>{stock.item_name}</TooltipContent>
              </Tooltip>
              <p className="text-xs">{stock.model_sku}</p>
            </div>
            <div className="flex items-center justify-center size-6 rounded-full bg-red-400 text-white text-xs font-semibold">
              {stock.total_available_stock}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default LowStockItemsCard;
