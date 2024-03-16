import BrandDetail from '@/components/ui/BrandDetail'
import React from 'react'
type BrandDetailParam = {
    params: {
        brandName: string
    },
    searchParams : {}
}

const BrandDetailPage = ({params}:BrandDetailParam) => {
    // console.log(params.brandName)
    const bName = params.brandName
  return (
    <div>
        <BrandDetail bName={bName}/>
    </div>
  )
}

export default BrandDetailPage