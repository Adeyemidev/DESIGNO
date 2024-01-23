import { Link } from 'react-router-dom'
import logo2 from '../assets/logo2.png'

import Facebook from '../assets/icon-facebook.svg'
import Youtube from'../assets/icon-youtube.svg'
import Twitter from '../assets/icon-twitter.svg'
import Pinterest from '../assets/icon-pinterest.svg'
import Instagram from '../assets/icon-instagram.svg'


 export function Footer(){
    return(< footer className='text-center md:text-left' style={{background:'hsl(270,3%,11%)'}}>

<nav className='block md:flex justify-between items-center md:mx-10 lg:mx-28 mt-10 pt-28 pb-4 md:border-b border-slate-500 border-opacity-30' style={{color:'hsl(0,0%,100%)'}}>
    <div className='border-b md:border-none border-slate-500 border-opacity-30'>

      <img className='h-7 md:h-6 m-auto md:m-0 mb-6 md:mb-0' src={logo2} alt="DesignNo" />

    </div>
          <ul className='md:flex gap-10 pt-8'>
            <Link to={'/our_company'}><li className='py-5'>OUR COMPANY</li></Link>
            <Link to={'/locations'}> <li className='py-5'>LOCATIONS</li></Link>
            <Link to={'/contact'}><li className='pt-5'>CONTACT</li></Link>
          </ul>
  </nav>

<div className='block md:flex justify-between items-center md:mx-10 lg:mx-28 md:pt-28 pb-10'style={{color: 'rgb(150, 150, 150)'}}>
<div className='py-12 md:py-0'>
    <p >Designo Central Office</p>
    <p>3886 Wellington Street</p>
    <p>Toronto, Ontario M9C 3J5</p>
</div>

<div>
    <p>Contact Us (Central Office)</p>
    <p>P: +1 253-863-8967</p>
    <p>M: contact@designo.co</p>
</div>
<div className='flex md:gap-4 px-16 md:px-0 pb-4 md:pb-0 pt-12 md:pt-0 logos '>
     <img src={Facebook} alt="Facebook" />
     <img src={Youtube} alt="Youtube" />
     <img src={Twitter} alt="Twitter(X)" />
     <img src={Pinterest} alt="Pinterest" />
     <img src={Instagram} alt="Instagram" />
</div>
        </div>
    </footer>)
 }
 export default Footer;