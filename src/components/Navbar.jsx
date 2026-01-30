 // @ts-ignore
 import { Link } from 'react-router'
import Logo from '../assets/logooooooo.png'
import Name from '../Name.jsx'
 import './Navbar.css'
import { FaChevronDown } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/authSlice.jsx'
import { CiMenuBurger } from 'react-icons/ci'
import { Button, Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
 export function Navbar(){
      const [opened, { open, close }] = useDisclosure(false);

  const {isLoggedin,user} = useSelector((state) => state.auth)
 const dispatch = useDispatch()

  const handleLogout = ()=> {
    console.log("runnn")
    dispatch(
        logout()
    )
  }
console.log(user)
    return(
        <>
     <div className='flex px-4 md:px-16 py-4 justify-between items-center w-full bg-gray-400 cursor-pointer '>
        <div className="">
            <img src={Logo} alt="" />
          
            {/* <img src="https://demo.templatesjungle.com/ultras/images/main-logo.png" alt="" /> */}
        </div>
        <div className=" gap-8 items-center hidden lg:flex ">
            <a href=""></a>
            {/* <h1 className='text-red-500 text-2xl'>Try tailwind</h1> */}
          
            <Link to= '/' className=" p-4">Home</Link>
            <Link to="/signup" className="navitem">Signup</Link>
            <Link to="/login" className="navitem">Login</Link>
            <Link to="/news" className="navitem">News</Link>
          
            {/* <Link to = "/hello">jpt</Link> */}
        
        </div>
        <div className='flex lg:hidden'>
            <CiMenuBurger onClick={open} />
               

    
        </div>
       <div className='hidden'>
         {user.name ? 
        <div className='flex gap-4 items-center bg-amber-50 p-2 rounded-lg'>
            <img className='h-8 w-8 rounded-full ' src={"data:image/jpeg;base64,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"} alt="" />
        <h3>{user?.name }</h3>
        <FaChevronDown />

        </div>
        : "Not Logged in" }
       </div>
            

            <button className='hidden' onClick={()=>handleLogout()}>Logout</button>

     </div>
     <Drawer offset={8} size="50%" position='right' radius="md" opened={opened} onClose={close} title="Authentication">
                      Home
      </Drawer>
        </>
    )
}


