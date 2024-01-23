// import Background from '../././././../assets/bg-worldClass'

export const Location_Props = ({office, number, email, street, city, map, country})=>{
    return<>

    <section id="LocationMap" className="flex lg:flex flex-col-reverse lg:flex-row mx-8 lg:mx-28  pt- md:justify-between ">
    <div className="rounded-2xl py-20 text-center md:text-left sm:pl-28 lg:pl-16 lg:pr-40 items-center  " 
    style={{backgroundColor:'rgb(253, 243, 240)'}} >
        <h1 className='text-3xl mb-6 font-bold'>{country}</h1>   
   
<div className="md:flex text-center md:text-left m-auto md:gap-28">
<span>
    <h4 className="">{office}</h4>
    <p>{street}</p>
    <p>{city}</p>

</span>
<span>
    <h4>Contact</h4>
    <p>P: {number}</p>
    <p>M: {email}</p>
</span>
</div>

 </div>
 <div style={{backgroundColor:'hsl(11,73%,66%)', borderRadius: '15px'}} className="mb-4 lg:mb-0">
 {map}    
 </div></section>

 </>
 }