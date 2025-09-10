import OrderStatusCard from "@/app/_components/order-status";
import LowStockItemsCard from "@/app/_components/low-stock-items";
import DashboardSummaryCard from "@/app/_components/dashboard-summary";
import TopSellingProductCard from "@/app/_components/top-selling-product";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-60px)] p-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-4 lg:gap-x-4">
          <div className="md:col-span-3 flex flex-col space-y-4">
            <DashboardSummaryCard />
          </div>
          <div className="md:mr-4 xl:mr-0 h-full">
            <LowStockItemsCard />
          </div>
          <div className="space-y-4 flex flex-col h-full">
            <OrderStatusCard />
            <TopSellingProductCard />
          </div>
        </div>
      </div>
    </main>
  );
}
