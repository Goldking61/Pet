import {Switch, useHistory, Routes, Route, BrowserRouter as Router} from "react-router-dom";
import { useState } from "react";
import {Hello} from "./components/Hello/Hello.jsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {About} from "./components/AboutPage/about";
import { NotFound } from "./components/NotFound/NotFound";
import { Css } from "./components/CssExamples/Css";
import {MainPage} from "./components/MainPage/main.jsx";
import Body from "./components/fon/fon.js";
import { Auth } from "./components/Authorization/Auth.jsx";


function App() {
  const [auth, isAuth] = useState(false);
  // const history = useHistory();
  // const User = getCurrentUser();
  console.log(auth)
  return (
    // Как правильно сделать?
    <Router>
      <Body>
      <Header/>
      <Routes>
        <Route exact path="/" 
          render={(props) => (
          <Auth {...props} isAuth={isAuth}/>
          )}
          />
        <Route path="/hello" element={<Hello/>}/>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/css" element={<Css/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
      </Body>
    </Router>
    
    
  );
}

export default App;
