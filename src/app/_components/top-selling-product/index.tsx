"use client"

import { cn } from "@/lib/utils";
import { Award } from "lucide-react";
import { useEffect, useState } from "react";
import { getTopSellingProducts } from "@/app/actions";
import TopSellingProductLoading from "./loading-card";
import { TopSellingProduct } from "@/types/top-selling-product";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const TopSellingProductCard = () => {
  const [TopSellingProducts, setTopSellingProducts] = useState<TopSellingProduct[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTopSellingProducts = async () => {
      try {
        const { data } = await getTopSellingProducts();
        setTopSellingProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stocks", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTopSellingProducts();
  }, []);
  return (
    <>
      {loading ? <TopSellingProductLoading /> : (
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm">
              <Award size={18} className="text-indigo-400" />
              <p className="font-semibold">Top Selling Products</p>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 px-3">
            {TopSellingProducts?.sort((a, b) => b.total_sold - a.total_sold).map(
              (product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-2 bg-gradient-to-r from-yellow-50 to-indigo-50 border border-gray-200 rounded-lg px-3 py-2"
                >
                  <div
                    className={cn(
                      "flex items-center justify-center bg-yellow-300 size-7 rounded-full text-indigo-800 text-[11px] font-semibold",
                      { "bg-indigo-50/50": index >= 3 }
                    )}
                  >
                    #{index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <p className="font-semibold text-sm truncate">
                          {product.item_name}
                        </p>
                      </TooltipTrigger>
                      <TooltipContent>{product.item_name}</TooltipContent>
                    </Tooltip>
                    <p className="text-xs text-gray-600">
                      {product.total_sold} Orders
                    </p>
                  </div>
                </div>
              )
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default TopSellingProductCard;
