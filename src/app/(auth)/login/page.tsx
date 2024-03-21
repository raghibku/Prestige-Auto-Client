import LoginForm from '@/components/ui/LoginForm'
import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <div className="hero  bg-base-200">

            <div className="hero-content flex-col md:flex-row">
                
                <div className="text-center md:w-1/2 lg:text-left text-white">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-2">Login to see the functionalities</p>

                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <LoginForm/>
                    <p className='p-4'><small>New Here? <Link href="/register" className='text-secondary'>Create an account</Link> </small></p>
                </div>
            </div>
        </div>
    )
}

export default Login