"use client"

import { login, toggleLoading } from "@/app/redux/features/users/userSlice";
import { useDispatch } from "react-redux";

const LoginForm =  () => {
    const dispatch = useDispatch();

    const handleLogin = async(e:any) => {
        dispatch(toggleLoading(true))
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginUser = {email,password}
        console.log(loginUser)
        try{
            const result = await fetch(`http://localhost:5000/login/${email}/${password}`);
            const user = await result.json()
            const userName = user.name;
            const userEmail = user.email
            const userRole = user.role
            dispatch(login({name:userName,email:userEmail,role:userRole}))
        }catch(error:any){
            console.error('Login failed',error.message)
        }finally{
            dispatch(toggleLoading(false))
        }
        


    }
  return (
    <form onSubmit={handleLogin} className="card-body">
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
                            <input disabled={false} className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white" type="submit" value="Login" />
                        </div>
                    </form>
  )
}

export default LoginForm