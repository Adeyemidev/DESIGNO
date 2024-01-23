import { Map2} from "../Maps/MapLocation"

 export const Location_Reverse = ()=>{
    return<>

<section id="LocationMap" className="lg:flex mx-8 lg:mx-28  py-4 lg:justify-between ">

<div style={{backgound:'hsl(11,73%,66%)',borderRadius: '15px'}}className="mb-4 lg:mb-0">
{Map2}    
 </div> 
 <div className="rounded-2xl py-20 text-center md:text-left  sm:pl-28 lg:pl-16 lg:pr-44 items-center  " 
    style={{backgroundColor:'rgb(253, 243, 240)'}} >
        <h1 className='text-3xl mb-6 font-bold'>Australia</h1> 
 <div className='flex flex-wrap md:flex-no-wrap gap-28' >
   
<span>
   <h4>Designo AU Office</h4>
   <p>19 Balonne Street</p>
   <p>New South Wales 2443</p>
</span>

<span>
   <h4>Contact</h4>
   <p>P: (02) 6720 9092</p>
   <p>M: contact@designo.au</p>
</span>

   </div></div>
 </section>

 </>
 }