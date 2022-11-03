import { Routes, Route } from 'react-router-dom';

import Home from './app/home/feature-home/Home';

import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
