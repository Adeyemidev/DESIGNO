import friendly from '../../assets/illustration-friendly.svg'
import passionate from '../../assets/illustration-passionate.svg'
import resourceful from '../../assets/illustration-resourceful.svg'

export function Service() {
   return (

    <section id='Services' className='lg:flex justify-center text-center mt-20 px-4 lg:px-28 gap-10'>
    <div className='py-6'><img src={passionate} alt="" />
        <h2>PASSIONATE</h2>
    <p>Each project starts with an in-depth brand research to 
        ensure we only create products that serve a purpose. We merge art,
         design, and technology into exciting new solutions.</p>
    </div>
    <div className='py-6'>
        <img src={resourceful} alt="" />
        <h2>RESOURCEFUL</h2>
    <p>Everything that we do has a strategic purpose. We use an agile
         approach in all of our projects and value customer collaboration.
          It guarantees superior results that fulfill our clients’ needs.
        </p></div>
    <div className='py-6'><img src={friendly} alt=''/>
        <h2>FRIENDLY</h2>
    
    <p>We are a group of enthusiastic folks who know how to put people first.
         Our success depends on our customers, and we strive to give them the
          best experience a company can provide.</p></div>
        </section>
  )
}
   