import './App.css';
import Home from './screens/Home';

import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <div>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// https://www.builtatlightspeed.com/theme/vinorodrigues-bootstrap-dark-5