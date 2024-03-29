"use client"
import Link from "next/link";
import { useEffect, useState } from "react";


const Brands = () => {
    const [brands, setBrands] = useState<any|null>(null);
    useEffect(() => {
      fetch('/data/brands.json')
        .then(res => res.json())
        .then(data => setBrands(data.brands))
    }, [])
  
    return (
      <div>
        <h1 className='text-3xl text-center font-bold py-4'>Our Brands </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {
            brands ?
              brands.map((brand:any) => {
                return (
  
                  <Link key={brand.id} href={`/brand-detail/${brand.name}`}  className='px-6'>
                    <h1 className='text-2xl font-semibold py-3'>{brand.name}</h1>
                    <div className="image h-[200px] flex justify-center items-center bg-base-300 rounded-lg">
                      <img src={brand.image} className='h-[150px] ' alt="" />
                    </div>
                    
                  </Link>
                  // <div key={brand.id} onClick={()=>navigate(`/brand-detail/${brand.name}`)}   className='px-6'>
                  //   <h1 className='text-2xl font-semibold py-3'>{brand.name}</h1>
                  //   <div className="image h-[200px] flex justify-center items-center bg-base-300 rounded-lg">
                  //     <img src={brand.image} className='h-[150px] ' alt="" />
                  //   </div>
                    
                  // </div>
                  
                )
              }) : "loading.."
          }
        </div>
      </div>
    )
  }

  export default Brands