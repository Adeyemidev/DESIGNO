import { Link } from "react-router-dom";

export function Projects() {
  return(<section id="Projects">
      <main className="grid grid-rows-3 lg:grid-flow-col text-center mx-4 md:mx-10 lg:mx-28 -mb-64 mt-20 gap-4">

    <Link to={'/services/web-design'} className="row-span-3 col-span-2 lg:col-span-4 ... web rounded-2xl"><div className="lg:py-72 py-28"><h2 className="m-auto place-items-center">WEB DESIGN</h2>
  <p>VIEW PROJECT</p></div>
  </Link>

    <Link to={'/services/app-design'} className="col-span-2 app rounded-2xl "><div className=" py-28 "><h2 className="m-auto">APP DESIGN</h2>
  <p>VIEW PROJECT</p></div>
    </Link>

    <Link to={'/services/graphics-design'} className="col-span-2 rounded-2xl graphics mb-60 md:mb-0"><div className="py-28 "><h2 className="m-auto ">GRAPHICS DESIGN</h2>
  <p >VIEW PROJECT</p></div>
  </Link>
  </main>
      </section>
  
  
   
  
    )
  }