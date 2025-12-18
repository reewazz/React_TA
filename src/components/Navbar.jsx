 // @ts-ignore
 import Logo from '../assets/logooooooo.png'
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
            <div className="navitem">Home</div>
            <div className="navitem">Home</div>
            <div className="navitem">Home</div>
            <div className="navitem">Home</div>
            <div className="navitem">Home</div>
            <div className="navitem">Home</div>
        </div>
     </div>
        </>
    )
}


