import RegisterForm from "@/components/ui/RegisterForm"


const Register = () => {
  return (
    <div className="hero bg-base-200">

      <div className="hero-content flex-col md:flex-row">

        <div className="text-center md:w-1/2 lg:text-left text-white">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">Don't have an account ? Register Now!</p>

        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <RegisterForm/>
        </div>
      </div>
    </div>
  )
}

export default Register