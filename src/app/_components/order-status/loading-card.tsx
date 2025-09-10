import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const OrderStatusLoading = () => {
  return (
    <Skeleton className='w-full bg-gray-200 rounded-lg p-4'>
      <Skeleton className='w-32 h-4 bg-gray-300 rounded-lg' />
      <Skeleton className='bg-gray-300 rounded-lg p-3 mt-5 space-y-10'>
        {Array.from({length: 3}).map((_, index) => (
          <div key={index} className='flex items-center justify-between'>
            <Skeleton className='w-24 h-3 bg-gray-400 rounded-lg' />
            <Skeleton className='w-16 h-5 bg-gray-400 rounded-full' />
          </div>
        ))}
      </Skeleton>
    </Skeleton>
  )
}

export default OrderStatusLoading