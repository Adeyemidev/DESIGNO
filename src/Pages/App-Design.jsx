import { GetIntouch } from "../Components/GetIntouch";
import Design_Component from "../Components/Projects_Components/Design_Component";
import {APP_DESIGN_DATA} from '../Components/Projects_Components/Project-DATA'
import {PROJECTS_HEADER} from "../Components/Projects_Components/Project_Header";
import { Sub_Link } from "../Components/Projects_Components/Sub-LINK";

export const APP_DESIGN = ()=> {

const APP_DETAILS = APP_DESIGN_DATA;
   
  
    return (
      <div>
<PROJECTS_HEADER Title={'APP DESIGN'} Header_Article={'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'} />
 
     <section className="grid md:grid-cols-3 gap-4 mx-6 md:mx-10 lg:mx-28">
      
      {APP_DETAILS.map((app) => (
         <Design_Component key={app.id}
          img={app.img} 
          Title={app.Title} 
          Article={app.Article} 
          />
       ))} </section>
       <Sub_Link DESIGN_TITLE1={'WEB DESIGN'} DESIGN_TITLE2={'GRAPHIC DESIGN'} LinkTo1={'/services/web-design'}
       LinkTo2={'/services/graphics-design'}/>

       <GetIntouch/>
      </div>
    );
  }
