"use client"

import { useEffect, useState } from "react";

interface Props {id : string}
const ProductDetails = ( props:Props ) => {
const id = props.id
    
    const [car, setCar] = useState<any|null>(null);

    useEffect(() => {
        fetch(`http://localhost:5000/car/${id}`)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])

    // const handleAddToCart = () => {
    //     const newCartItem = {
    //         car,
    //         userEmail: user.email
    //     }

    //     console.log(newCartItem)
    //     fetch('http://localhost:5000/cart', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(newCartItem),
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         if (data.insertedId) {
    //             Swal.fire({
    //                 title: 'Success!',
    //                 text: 'Car added to cart successfully',
    //                 icon: 'success',
    //                 confirmButtonText: 'Cool'
    //             })
    //         }
    //     })
    // }

    return (
        car ?
            <div>
                <h1 className='text-3xl text-center font-bold py-4'>ProductDetail </h1>
                <div className='flex  justify-start items-center px-4 py-4 bg-base-300'>
                    <div className='flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 '>
                        <img src={car.photoURL} className='h-[200px] w-[300px]' alt="" />
                        <div className='flex flex-col justify-center items-start gap-3'>
                            <h1 className='text-2xl text-white font-bold  '>{car.name}</h1>
                            <p className='lg:w-[400px]'>
                                {car.shortDescription}
                            </p>

                            <h2 className='text-xl font-semibold'>Brand:{car.brandName}</h2>
                            <h2 className='text-xl font-semibold'>Category:{car.category}</h2>


                            <h2 className='text-xl text-primary'>Price:{car.price}$</h2>
                            <h2 className='text-xl text-secondary'>Rating:{car.rating}</h2>
                        </div>
                        <button  className='btn btn-secondary'>Add To Cart</button>

                        {/* <button onClick={handleAddToCart} className='btn btn-secondary'>Add To Cart</button> */}


                    </div>
                </div>
            </div> : "loading..."
    )
}
export default ProductDetails;