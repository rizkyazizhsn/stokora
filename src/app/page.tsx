import OrderStatus from "@/app/_components/order-status";
import LowStockItems from "@/app/_components/low-stock-items";
import DashboardSummary from "@/app/_components/dashboard-summary";
import TopSellingProduct from "@/app/_components/top-selling-product";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-60px)] p-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-4 lg:gap-x-4">
          <div className="md:col-span-3 flex flex-col space-y-4">
            <DashboardSummary />
          </div>
          <div className="md:mr-4 xl:mr-0 h-full">
            <LowStockItems />
          </div>
          <div className="space-y-4">
            <OrderStatus />
            <TopSellingProduct />
          </div>
        </div>
      </div>
    </main>
  );
}
