import React from "react"
import  backgroundImg from '../../assets/background-image.svg'
export function PROJECTS_HEADER({Title, Header_Article}){
    return(<>
<div style={{backgroundImage: `url(${backgroundImg})`,backgroundPosition: '15rem 10rem', backgroundColor:'hsl(11,73%,66%)'}} className="text-center py-16 md:rounded-2xl mb-20 md:mb-24 mx-0 md:mx-28 grid place-items-center">

    <h2 style={{color:'hsl(0,0%,100%)'}} className="pb-3 md:pb-6 font-bold lg:font-extrabold text-3xl md:text-4xl lg:text-[38px]">{Title}</h2>
          <p style={{maxWidth: '31rem'}}>
{Header_Article}
 </p>
     </div>
 
    </>)
}