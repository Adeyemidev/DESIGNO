import Design_Component from "../Components/Projects_Components/Design_Component";
import {PROJECTS_HEADER} from "../Components/Projects_Components/Project_Header";
import { GRAPHICS_DESIGN_DATA } from "../Components/Projects_Components/Project-DATA";
import { Sub_Link } from "../Components/Projects_Components/Sub-LINK";
import { GetIntouch } from "../Components/GetIntouch";
export const GRAPHICS_DESIGN = ()=> {

const GRAPHICS_DETAILS = GRAPHICS_DESIGN_DATA ;
   
  
    return (
  <div>
   <PROJECTS_HEADER Title={' GRAPHICS DESIGN'} Header_Article={'We deliver eye-catching branding materials that are tailored to meet your business objectives.'} />
 
     <section className="grid md:grid-cols-3 gap-4 mx-6 md:mx-10 lg:mx-28">
      
      {GRAPHICS_DETAILS.map((graphics) => (
         <Design_Component key={graphics.id}
          img={graphics.img} 
          Title={graphics.Title} 
          Article={graphics.Article} 
          />
       ))} </section>
   <Sub_Link DESIGN_TITLE1={'APP DESIGN'} DESIGN_TITLE2={'WEB DESIGN'} LinkTo1={'/services/web-design'}
       LinkTo2={'/services/graphics-design'}/>   

       <GetIntouch/> 
  </div>


    );
  }
  