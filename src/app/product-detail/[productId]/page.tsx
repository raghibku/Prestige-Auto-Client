import ProductDetails from '@/components/ui/ProductDetails'
import React from 'react'

type ProductParams = {
  params: {
    productId:string
  },
  searchParams : {}
}
const ProductDetailPage = ({params}:ProductParams) => {
    const id = params.productId
    // console.log(id)
  return (
    <div>
      
      <ProductDetails id={id}/>
    </div>
  )
}

export default ProductDetailPage