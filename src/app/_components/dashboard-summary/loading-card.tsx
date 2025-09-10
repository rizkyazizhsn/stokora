import { Skeleton } from "@/components/ui/skeleton";

const LoadingCard = () => {
  return (
    <>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="p-4 bg-gray-200">
            <div className="flex justify-between">
              <div className="space-y-3">
                <Skeleton className="w-20 h-4 bg-gray-300 rounded-lg" />
                <Skeleton className="w-42 h-6 bg-gray-300 rounded-lg" />
                <Skeleton className="w-42 h-4 bg-gray-300 rounded-lg" />
              </div>
              <Skeleton className="size-8 bg-gray-300 rounded-lg" />
            </div>
          </Skeleton>
        ))}
      </div>
      {/* Sales Overview */}
      <Skeleton className="w-full bg-gray-200 space-y-3 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <Skeleton className="w-52 h-4 bg-gray-300 rounded-lg" />
          <Skeleton className="w-52 h-8 bg-gray-300 rounded-lg" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <Skeleton className="w-26 h-4 bg-gray-300 rounded-lg" />
              <Skeleton className="w-32 h-6 bg-gray-300 rounded-lg" />
            </div>
          ))}
        </div>
      </Skeleton>
      {/* Monthly Performance */}
      <Skeleton className="w-full bg-gray-200 space-y-3 rounded-lg p-4">
        <Skeleton className="w-52 h-4 bg-gray-300 rounded-lg" />
        <Skeleton className="w-full h-80 bg-gray-300 rounded-lg" />
      </Skeleton>
    </>
  );
};

export default LoadingCard;
