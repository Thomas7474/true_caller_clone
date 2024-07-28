import Body from "./components/body";
import Header from "./components/header";
import About from "./components/about";
import ResponsiveAppBar from './components/navbar';
import Login from './components/login';
import ThreeScene from './components/threedim';
import Signup from "./components/signup";
import Search from "./components/search";

function App(){

  return(
    <>
    <Header/>
    <Body/>
    <About/>
    <ResponsiveAppBar/>
    <Login/>
    <ThreeScene/>
    <Signup/> 
    <Search/>
    </>
  );
}

export default App