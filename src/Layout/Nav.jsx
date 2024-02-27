
import logo1 from '../assets/logo1.png'
import { Link } from "react-router-dom"
import '../App.css'
import { useState } from 'react'
import { HandburgerClick } from '../Pages/HanburgerClick'

export const Nav = () => {
  const [clickHanburger, setClickHanburger] = useState(false);

  const hanburger = () => {
    setClickHanburger(!clickHanburger);
  }
  
  return (
    <div>
      {clickHanburger && <HandburgerClick />}

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

