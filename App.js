// import "./App.css";
// import Home from "./Components/Home";
// import {Routes, Route} from 'react-router-dom'
// import IndividualVideo from "./Components/IndividualVideo";
// import Login from "./Components/Login"
// import SignUp from "./Components/Signup";
// function App() {
//   return <div className="">

//   <Routes>
//     <Route exact path = "/login" element={<Login/>}/>
//     <Route exact path = "/signup" element={<SignUp/>}/>
//     <Route exact path="/" element={<Home />}></Route>
//     <Route exact path="/video/:id" element={<IndividualVideo />}></Route>
    

//   </Routes>
// </div>;
// }

// export default App;

import "./App.css";
import Home from "./Components/Home";
import {Routes, Route} from 'react-router-dom'
import IndividualVideo from "./Components/IndividualVideo";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import GamingVideos from "./Components/GamingVideos";
import TrendingVideos from "./Components/TrendingVideos";
import SavedVideos from "./Components/SavedVideos";
function App() {
  return <div className="">
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/video/:id" element={<IndividualVideo />}></Route>
      <Route exact path="/auth" element={<Login />}></Route>
      <Route exact path="/signup" element={<Signup />}></Route>
      <Route exact path="/gaming" element={<GamingVideos />}></Route>
      <Route exact path="/saved" element={<SavedVideos />}></Route>
      <Route exact path="/trending" element={<TrendingVideos />}></Route>
    </Routes>
  </div>;
}
export default App;