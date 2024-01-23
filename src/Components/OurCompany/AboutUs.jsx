 export const AboutUs = ({title, first_paragraph, second_paragraph, image})=>{

  
    return(<>
  <section id='Props' style={{background:'rgb(253, 243, 240)', backgroundImage:`url(background)`}}className='flex flex-wrap sm:flex-no-wrap items-center justify-between md:my-12 sm:mx-10 md:mx-28 rounded-xl text-center sm:text-center' >
   
<div className='px-4 pb-10 md:pb-0  md:pr-16 order-last background-img'>
     
  <h1 className='text-3xl md:text-5xl font-semibold mb-5 pt-10 md:pt-0' style={{color:' hsl(11,73%,66%)'}}>{title}</h1>

  <p className='my-8'>{first_paragraph}
  </p>
 <p>
 {second_paragraph} </p>
</div>
<div className="">
<img className='md:rounded-l-2xl m-auto  h-80 w-96 md:h-full md:w-full' src={image} alt="" />
</div>

</section>
    </>)
 }
