'use client'

import { useSelector } from "react-redux"
import { useLayoutEffect, useState } from "react"
import { redirect } from "next/navigation"
import Swal from 'sweetalert2' 

const AddProductPage = () => {
  const user = useSelector((state: any) => state.user.userInfo)
  const userRole = user.role;

  useLayoutEffect(() => {
    if (userRole !== 'agent') {
      redirect('/')
    }
  }, [])
  const handleAddCar = (e:any) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const category = form.category.value;
    const price = form.price.value;
    const photoURL = form.photoURL.value;
    const rating = form.rating.value;
    const shortDescription = form.shortDescription.value;

    const newcar = {
      name, brandName, category, price, photoURL, rating, shortDescription
    }
    fetch('https://brand-shop-server-dw6nsjbsy-raghibs-projects.vercel.app/cars', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newcar),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Car added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })


  }

  return (

    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl my-4'>Add Car</h1>
      <form className='flex flex-col justify-around items-center'  onSubmit={handleAddCar}>
        <div className='flex flex-col md:flex-row justify-around items-center gap-4'>
          <div className='flex flex-col justify-around items-center'>
            <input className='border p-2 my-2 border-black rounded-md w-60' type="text" name="name" placeholder='Name' />
            <input className='border p-2 my-2 border-black rounded-md w-60' type="text" name="brandName" placeholder='brandName' />
            <input className='border p-2 my-2 border-black rounded-md w-60' type="text" name="category" placeholder='category' />
          </div>
          <div className='flex flex-col justify-around items-center'>
            <input className='border p-2 my-2 border-black rounded-md w-60' type="number" name="price" placeholder='price' />
            <input className='border p-2 my-2 border-black rounded-md w-60' type="url" name="photoURL" placeholder='photoURL' />
            <input className='border p-2 my-2 border-black rounded-md w-60' type="rating" name="rating" placeholder='rating' />
          </div>

        </div>
        <div className='flex flex-col justify-around items-center w-full'>
          <textarea className='border p-2 my-2 border-black rounded-md w-full'  name="shortDescription" rows={4} placeholder='shortDescription' />
          <button className='px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md' type="submit">Add Car</button>
        </div>

      </form>
    </div>

  )
}

export default AddProductPage