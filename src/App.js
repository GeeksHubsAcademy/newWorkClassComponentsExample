
import './App.css';

//This is always imported like this

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Containers/Home/Home';

function App() {
  return (
    <div className="App">
      
      {/* This is going to contain the basic routing of the app */}
      {/* BrowserRouter, Routes and Route are all JSX custom elements, (components) */}

      <BrowserRouter>
      
        <Routes>

            {/* Everything contained here, are the changing parts, the containers so to speak */}

            <Route path="/" element={<Home/>}/>
            
        </Routes>
      
      </BrowserRouter>

      
    </div>
  );
}

export default App;
