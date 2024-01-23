import { Link } from "react-router-dom"
export const  HandburgerClick = ()=>{

return(
<div>
<nav id="handburgerNav"className='block z-40 bg-black w-full mt-10 pl-4 py-8 absolute'>
   <ul >
     <Link to={'/our_company'}  ><li className="text-2xl">OUR COMPANY</li></Link>
    <Link to={'/locations'}  > <li className="my-6 text-2xl">LOCATIONS</li></Link>
     <Link to={'/contact'} ><li className="text-2xl">CONTACT</li></Link>
   </ul>
 </nav> 
    </div>)
}