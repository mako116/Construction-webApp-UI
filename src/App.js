import logo from './logo.svg';
import './App.css';
import { Navbar } from './componets/Header/Navbar';
import { Layout } from './Layout/Layout';
import { Pages } from './Pages/Pages';
 import { BrowserRouter as Router } from "react-router-dom";
import { routes } from './Router/routes';

function App() {
  return (
   <>
   <Router>{routes}</Router>
   </>
  );
}

export default App;
