import './App.css';
import Home from './PortfolioContainer/Home/Home'; 
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Details from './PortfolioContainer/Details/Details';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
      <Route path="/:id" element={<Details />} />
     <Route  path="/" element={<Home />} />
     <Route  path="home" element={<Home />} />
     
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
