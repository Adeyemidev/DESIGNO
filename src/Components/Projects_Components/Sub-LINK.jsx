import { Link } from "react-router-dom"
export const Sub_Link =({LinkTo1, LinkTo2, DESIGN_TITLE1, DESIGN_TITLE2})=> {
    return(
    <body id="Projects Sub_Link" className="grid grid-flow-row md:grid-flow-col text-center m-auto mx-4 md:mx-10 lg:mx-28 mt-20 gap-4">
  
  
  <Link to={LinkTo1} className="app rounded-2xl"><div className=" py-28"><h2 className="m-auto">{DESIGN_TITLE1}</h2>
  <p className="m-auto">VIEW PROJECT</p></div>
  </Link>
  
  < Link to={LinkTo2} className="rounded-2xl graphics"><div className="py-28"><h2 className="m-auto">{DESIGN_TITLE2}</h2>
  <p className="m-auto ">VIEW PROJECT</p></div>
  </Link>
  </body>
 ) }