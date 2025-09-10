import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const LowStockItemLoading = () => {
  return (
    <Skeleton className='w-full bg-gray-200 space-y-2 rounded-lg p-4'>
      <Skeleton className='w-32 h-4 bg-gray-300 rounded-lg mb-5' />
      {Array.from({length: 5}).map((_, index) => (
        <Skeleton key={index} className='bg-gray-300 rounded-lg p-3 gap-3 flex items-center justify-between'>
          <div className='flex-1 space-y-2'>
            <Skeleton className='w-full h-4 bg-gray-400 rounded-lg' />
            <Skeleton className='w-32 h-3 bg-gray-400 rounded-lg' />
          </div>
          <Skeleton className='size-6 bg-gray-400 rounded-full' />
        </Skeleton>
      ))}
    </Skeleton>
  )
}

export default LowStockItemLoading