import Link from "next/link"


const Navbar = () => {
    const navlinks = <>
    <li><Link href='/'>Home</Link> </li>
    <li><Link href='/add-product'>Add Product</Link> </li>
    <li><Link href='/my-cart'>My Cart</Link> </li>


  </>
  return (
    <div className='w-full flex justify-center items-center '>
      <div className="navbar flex justify-between  bg-primary w-full px-4 lg:px-12">
        <div className="navbar-start w-min md:w-full" >
          <div className="flex justify-center items-center gap-3">
            <h1 className="text-gray-200 hidden lg:flex text-3xl font-serif font-extrabold">Prestige Auto</h1>
            {/* <img className="hidden lg:flex" src="/logo/logo.png" alt="" /> */}

          </div>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">

              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navlinks}
            </ul>
          </div>
       
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-4 mx-4 gap-4 text-white">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end flex justify-center items-center w-fit  md:w-full text-white gap-2">

        </div>
      </div>
    </div>
  )
}

export default Navbar