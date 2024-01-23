import { Location_Props } from "./Location_Props"
import { Location_Reverse } from "./Locaton_Reverse"
import { Map1 } from "../Maps/MapLocation"
import { Map3 } from "../Maps/MapLocation" 
import { GetIntouch } from "../GetIntouch"

export const DisplayLocation = ()=>{

 return(<><div id="DisplayLocation" className="">     
<Location_Props country={'Canada'} map={Map1} street={'3886 Wellington Street'} city={'Toronto, Ontario M9C 3J5'}
 office={"Designo Central Office"} number={'+1 253-863-8967'} email={'contact@designo.co'}/>

<Location_Reverse/>

<Location_Props country={'United Kingdom'} map={Map3} office={"Designo UK Office"}  street={'13 Colorada Way'} city={'Rhyd-y-fro SA8 9GA'}
 number={'+44 078 3115 1400'} email={'contact@designo.uk'}/>

 </div>
 <GetIntouch/></>)
 }