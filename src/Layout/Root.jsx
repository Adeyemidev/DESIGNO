import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
export const Root = ()=>{
    return(<>
<div>
    <Nav />
    
    <main>
    <Outlet/>
     </main>
      < Footer />
</div>

        </>
    )
}