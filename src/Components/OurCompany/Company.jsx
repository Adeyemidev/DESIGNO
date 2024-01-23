import  Aboutus from '../../assets/aboutUs-img.jpg'
import '../../App.css'
import { AboutUs } from './AboutUs'
import { Countries } from '../Countries'
import WorldClass from '../../assets/image-world-class-talent.jpg'
import RealDeal from '../../assets/image-real-deal.jpg'
import {GetIntouch} from '../GetIntouch'
export const Company = ()=>{

 return(
 <>
  
<section className='flex flex-wrap md:flex-no-wrap flex-col-reverse md:flex-row items-center justify-center text-center md:text-left md:justify-between company md:mb-10 md:mx-28 md:rounded-xl'>
<div className='px-4 pb-10 md:pb-0 md:pl-16'>

  <h1 className='text-3xl md:text-5xl font-semibold mb-5 pt-10 md:pt-0'>About Us</h1>

  <p>Founded in 2010, we are a creative agency that
     produces lasting results for our clients. We’ve partnered with many startups,
      corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences
     that connect with our clients’ audiences.
  </p>
</div>

<div className=' sm:mt-20 md:mt-0'>
<img className=' md:rounded-r-2xl' src={Aboutus} alt="" />
</div>
</section>

<AboutUs title = {"World-class talent"}
 first_paragraph={'We are a crew of strategists,problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.' }
second_paragraph={"Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."}
image ={WorldClass}/>


<Countries/>
<AboutUs title = {"The real deal"}
 first_paragraph={'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.' }
second_paragraph={"We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."}
image ={RealDeal}/>

<GetIntouch/>
 </>)
 }