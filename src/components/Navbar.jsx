 // @ts-ignore
 import { Link } from 'react-router'
import Logo from '../assets/logooooooo.png'
import Name from '../Name.jsx'
 import './Navbar.css'
 export function Navbar(){
    return(
        <>
     <div className='nav'>
        <div className="logo">
            <img src={Logo} alt="" />
            {/* <img src="https://demo.templatesjungle.com/ultras/images/main-logo.png" alt="" /> */}
        </div>
        <div className="nav-items">
            <a href=""></a>
          
            <Link to= '/' className="navitem">Home</Link>
            <Link to="/products" className="navitem">Products</Link>
            <Link to="/form" className="navitem">Todo</Link>
            <Link to="/news" className="navitem">News</Link>
          
            {/* <Link to = "/hello">jpt</Link> */}
        
        </div>
            

     </div>
        </>
    )
}


