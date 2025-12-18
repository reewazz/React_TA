
import { FaBeer } from 'react-icons/fa'
import './Header.css'
import { CiHeart, CiUser } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'
import { VscSearch } from 'react-icons/vsc'
export const Header =()=>{
    return (
     <>
     <div className="top-header">
        <div>Let's talk!  <strong>+57 444 11 00 35</strong></div>
        <div>Free shipping on a purchase value of $200</div>
        <div className='icons'>
        <CiUser className='icon' />
        <IoCartOutline className='icon' />
        <CiHeart className='icon' />
        <VscSearch className='icon' />
        </div>
     </div>
     </>
    
    )
}

