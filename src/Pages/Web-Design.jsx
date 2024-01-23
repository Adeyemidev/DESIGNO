import { GetIntouch } from "../Components/GetIntouch";
import Design_Component from "../Components/Projects_Components/Design_Component";
import {WEB_DESIGN_DATA} from '../Components/Projects_Components/Project-DATA'
import {PROJECTS_HEADER} from "../Components/Projects_Components/Project_Header";
import { Sub_Link } from "../Components/Projects_Components/Sub-LINK";
export const WEB_DESIGN = ()=> {

const WEB_DETAILS = WEB_DESIGN_DATA;
   
  
    return (
      <div>
<PROJECTS_HEADER Title={'WEB DESIGN'} Header_Article={'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'} />
 
     <section className="grid md:grid-cols-3 gap-4 mx-6 md:mx-10 lg:mx-28">
      
      {WEB_DETAILS.map((web) => (
         <Design_Component key={web.id}
          img={web.img} 
          Title={web.Title} 
          Article={web.Article} 
          />
       ))} </section>

<Sub_Link DESIGN_TITLE1={'APP DESIGN'} DESIGN_TITLE2={'GRAPHIC DESIGN'} LinkTo1={'/services/app-design'}
       LinkTo2={'/services/graphics-design'}/>

       <GetIntouch/>
      </div>
    );
  }
