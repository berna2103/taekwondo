import './App.css';
import Home from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Promotions from './Components/Promotions/Promotions';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='display/promotions' element={<Promotions showSectionTitle={false}/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
