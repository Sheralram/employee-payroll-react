
import './App.css';
import Payrollform from '../src/components/payroll-form/payroll-form';
import Home from '../src/components/home/home'
import {Routes,Route, Link} from "react-router-dom";

function App() {
  return (
  <div>
    {/* <Payrollform/> */}
     <nav>
        <Link to="/">Home</Link> | <Link to="/payroll-form">Payrollform</Link> |{" "}
        {/* <Link to="/bridgelabz">Bridgelabz</Link> */}
      </nav>
    <div className="App">
      Hello World
    </div>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route exact path='/payroll-form' element={<Payrollform/>} /> 
      </Routes>
    </div>
  );
}

export default App;
