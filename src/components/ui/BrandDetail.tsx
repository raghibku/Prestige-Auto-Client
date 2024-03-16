"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {bName : string}


const BrandDetail = (props:Props) => {
    // console.log(params)
    const brandName = props.bName;

    const [cars, setCars] = useState<any|null>(null)
    const [isFetchComplete, setIsFetchComplete] = useState(false);
    useEffect(() => {
        fetch(`https://brand-shop-server-dw6nsjbsy-raghibs-projects.vercel.app/cars/${brandName}`)
            .then(res => res.json())
            .then(data => {
                setCars(data);
                setIsFetchComplete(true);
            })
    }, [])

    return (
        <div>
            <h1 className='text-3xl text-center font-bold py-4'>BrandDetail {brandName} </h1>


            {
                !isFetchComplete ? (
                    <div className='w-full h-[300px] flex justify-center items-center text-center'>
                        <p className='text-3xl font-semibold'>Loading.....</p>
                    </div>
                ) : cars.length === 0 ? (
                    <div className='w-full h-[300px] flex justify-center items-center text-center'>
                        <p className='text-3xl font-semibold'>No cars found</p>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            cars.map((car:any) => {
                                return (

                                    <div key={car._id} className='flex justify-center items-center px-4 py-4 bg-base-300'>
                                        <div className='flex flex-col justify-center items-start '>
                                            <img src={car.photoURL} className='h-[200px] w-[300px]' alt="" />
                                            <h1 className='text-2xl  font-bold'>{car.name}</h1>
                                            <div className='flex justify-between items-center gap-4'>
                                                <h2 className='text-xl font-semibold'>Brand:{car.brandName}</h2>
                                                <h2 className='text-xl font-semibold'>Category:{car.category}</h2>
                                            </div>
                                            <div className='flex justify-between items-center gap-4'>
                                                <h2 className='text-xl text-primary'>Price:{car.price}$</h2>
                                                <h2 className='text-xl text-secondary'>Rating:{car.rating}</h2>
                                            </div>
                                            <div className='flex justify-between items-center gap-4'>
                                                <Link href={`/product-detail/${car._id}`} className='btn btn-primary'>Details</Link>
                                                {/* <button onClick={() => navigate(`/update-product/${car._id}`)} className='btn btn-secondary'>Update</button> */}
                                            </div>

                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                )


            }

        </div>
        // <h1>Hello</h1>
    )
}

export default BrandDetail