
import logo1 from '../assets/logo1.png'
import { Link } from "react-router-dom"
import '../App.css'
import { useState } from 'react'
export const Nav = () => {
  const [clickHanburger, setClickHanburger] = useState(false);

  const hanburger = () => {
    setClickHanburger(!clickHanburger);
  }
  
   const closeHanburger = ()=>{
    setClickHanburger(false)
   }
  return (
    <div>
  
      {clickHanburger &&  <nav id="handburgerNav"className='block z-40 bg-black w-full mt-10 pl-4 py-8 absolute transition ease-in-out delay-150 '>
   <ul >
     <Link to={'/our_Company'}  ><li className="text-2xl" onClick={closeHanburger}>OUR COMPANY</li></Link>
    <Link to={'/locations'}  > <li className="my-6 text-2xl" onClick={closeHanburger} >LOCATIONS</li></Link>
     <Link to={'/contact'} ><li className="text-2xl" onClick={closeHanburger}>CONTACT</li></Link>
   </ul>
 </nav> 
      
      }

      <header id='header'>
        <nav className='flex justify-between mx-4 sm:mx-8 lg:mx-28 my-6 md:mt-10'>
          <Link to={'/'}>
            <img className='h-6' src={logo1} alt="DesignNo" />
          </Link>
          <div className='hanburger' onClick={hanburger}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className=' flex gap-16'>
            <Link to={'/our_company'}><li>OUR COMPANY</li></Link>
            <Link to={'/locations'}><li>LOCATIONS</li></Link>
            <Link to={'/contact'}><li>CONTACT</li></Link>
          </ul>
        </nav>
      </header>
    </div>
  )
}
export default Nav;


