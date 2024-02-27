import { Link } from 'react-router-dom'
import Hero from '../../assets/desktop-hero-image.png'

export function Header() {
  return(

<section id='first-section' className='text-center  lg:text-left md:mx-10 lg:mx-28 lg:flex justify-center lg:justify-between md:px-10 lg:px-20 pt-10 md:pt-32 sm:rounded-2xl' style={{backgroundColor:'hsl(11,73%,66%)'}}>
        <div>
        <h1 className=' text-3xl px-6 md:px-0
        md:text-4xl lg:text-5xl font-bold mt-8 text-center lg:text-left'>Award-winning custom designs and digital branding solutions</h1>
        <p className='font-normal pt-6 text-center px-6 md:px-0 leading-7 m-auto lg:m-0 lg:text-left'>With over 10 years in the industry, we are experienced in creating fully
         responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
<Link to={'/our_Company'}>
  <button  className='rounded-lg font-medium text-sm py-5 px-6 mt-6 mb-10'>Learn More</button>
</Link>
        </div>
        <div className='hero-background'><img className='m-auto  md:m-right' src={Hero} alt="hero frame" /></div>
  </section>
 
)
}


