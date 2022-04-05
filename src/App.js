import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Error404 from './components/Error404/Error404';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App.css">
      <Header></Header>
       <Routes>
          <Route path = '/' element = {<Home></Home>}></Route>
          <Route path = '/home' element = {<Home></Home>}></Route>
          <Route path = '/reviews' element = {<Reviews></Reviews>}></Route>
          <Route path = '/dashboard' element = {<Dashboard></Dashboard>}></Route>
          <Route path = '/blogs' element = {<Blogs></Blogs>}></Route>
          <Route path = '/about' element = {<About></About>}></Route>
          <Route path = '/*' element = {<Error404></Error404>}></Route>
       </Routes>
    </div>
  );
}

export default App;