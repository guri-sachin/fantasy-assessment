import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeOne from './component/HomeOne';
import HomeTwo from './component/HomeTwo';
import HomeThree from './component/HomeThree';
import Profile from './component/Profile';
import Notification from './component/Notification';
import Mymatch from './component/Mymatch';
import More from './component/More';
import Winner from './component/Winner';
function App() {
  return (
 <>
  <Router>
        <Routes>
          <Route exact path="/" element={<HomeOne />}></Route>  
          <Route exact path="/HomeTwo" element={<HomeTwo />}></Route>  
          <Route exact path="/HomeThree" element={<HomeThree />}></Route>   
          <Route exact path="/Profile" element={<Profile />}></Route>    
          <Route exact path="/Notification" element={<Notification/>}></Route>   
          <Route exact path="/MyMatch" element={<Mymatch/>}></Route>   
          <Route exact path="/More" element={<More/>}></Route>  
          <Route exact path="/winner" element={<Winner/>}></Route>     
        </Routes>
      </Router>
 </>
  );
}

export default App;
