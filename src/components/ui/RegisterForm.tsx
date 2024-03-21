"use client"

import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../utils/createUser";
import { setUser, toggleLoading } from "@/app/redux/features/users/userSlice";



const RegisterForm = () => {
    const dispatch = useDispatch();
    const user = useSelector((state:any)=>state.user.userInfo);
    const handleRegister = async (e: any) => {
        dispatch(toggleLoading(true))
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = {
            name,
            email,
            password,
            role: 'visitor'
        }
        try {

            const response = await createUser(newUser);
            console.log('User created successfully:', response);
            dispatch(setUser({name,email}))
            


            // Handle successful creation
        } catch (error:any) {
            console.error('Failed to create user:', error.message);
            // Handle error
            throw error;
        }finally{
            dispatch(toggleLoading(false))
        }
    }

    return (
        <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="name" name="name" placeholder="name" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <input disabled={false} className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white" type="submit" value="Register" />
            </div>
            
        </form>
    )
}

export default RegisterForm