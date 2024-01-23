import { Link } from "react-router-dom"

export const GetIntouch = ()=>{
    
    
    return(<>
    <section className="mx-4 md:mx-10 lg:mx-28 text-center md:text-left GetIntouch">
    <div className="block md:flex justify-between items-center rounded-lg px-4 md:px-10 lg:px-24 py-12">

    <div>
        <h2 className="pb-6 font-semibold">Let's talk about your project</h2>
        <p>Ready to take it to the next level? Contact us today 
        and find out how our expertise can 
        help your business grow.</p>
   </div>

    <div>
<Link to={'/contact'}>
<button className='rounded-lg font-medium text-sm py-4 md:py-5 px-6 mt-6 font-bold'>GET IN TOUCH</button>

</Link>

</div>
     
    </div>
    </section>
    </>)
 }