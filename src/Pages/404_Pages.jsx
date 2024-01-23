 import { Link } from "react-router-dom"
  export const Error = ()=>{
    return(<div className="text-center py-20 "style={{color:'hsl(11,73%,66%)'}}>
    <h1>404</h1>
    <h3 className="text-5xl" > PAGE NOT FOUND!</h3>
    <Link to='/'><button className="border mt-10 rounded p-1 hover:bg-none">Homepage</button></Link>
    </div>)
 }