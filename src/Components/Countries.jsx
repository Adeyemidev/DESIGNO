import CANADA from '../assets/illustration-canada.svg'
import AUSTRALIA from '../assets/illustration-australia.svg'
import UNITEDKINGDOM from '../assets/illustration-united-kingdom.svg'
export const Countries = ()=>{
    return(



<section id='Countries' className='flex flex-wrap md:flex-no-wrap justify-center md:justify-around items-center text-center mt-20 mx'>
<div><img src={CANADA} alt="CANADA" />
<h2>CANADA</h2>
  <button  className='rounded-lg font-medium text-sm py-5 px-6 mt-6'>
  SEE LOCATION</button>
</div>

<div className='mt-16 md:mt-0'>
<img src={AUSTRALIA} alt="AUSTRALIA" />
<h2>AUSTRALIA</h2>
        <button  className='rounded-lg font-medium text-sm py-5 px-6 mt-6'>
        SEE LOCATION</button>
        </div>


<div className='my-16 md:my-0'><img src={UNITEDKINGDOM} alt="UNITED KINGDOM"/>
<h2>UNITED KINGDOM</h2>
        <button 
        className='rounded-lg font-medium text-sm py-5 px-6 mt-6'>SEE LOCATION</button></div>
    </section>
  )
}