import logo from './logo.svg';
import './App.css';
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
