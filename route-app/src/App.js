import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import IdPwFind from './pages/IdPwFind';
import Login from './pages/Login';
import Header from "./components/Header";
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Home from './pages/Home';
import About from './pages/About';
import Detail from './pages/Detail';

function App(){
  return (
    <Router>
      <div className="container">
        <Header/>
        <Routes>
          {/* <Route path="개발자가 설정한 URL"/> */}

          <Route path="/" element={<Navigate to="/home"/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/idpwfind" element={<IdPwFind/>}/>
          <Route path="/login" element={<Login/>}>
          <Route path="/notfound" element={<NotFound/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
    );
};


export default App;
