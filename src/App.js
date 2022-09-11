import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import {Hello} from "./components/Hello/Hello.jsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {About} from "./components/AboutPage/about";
import { NotFound } from "./components/NotFound/NotFound";
import { Css } from "./components/CssExamples/Css";
import {MainPage} from "./components/MainPage/main.jsx";
import Body from "./components/fon/fon.js";


function App() {
  return (
    
    <Router>
      <Body>
      <Header/>
      <Routes>
        <Route path="/hello" element={<Hello/>}/>
        <Route path="/" element={<MainPage/>}/>
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
