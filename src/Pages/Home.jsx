
import { Header } from '../Components/Home/Header';
import { Service } from '../Components/Home/Services';
import { GetIntouch } from '../Components/GetIntouch';
import '../App.css'
import { Projects } from '../Components/Home/Projects';

export const Home = () => {
return(<div>
  
  <Header/>
  <Projects/>
  <Service/>
  <GetIntouch/> 
    </div>
)
  }
  export default Home;