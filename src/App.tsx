import { Routes, Route } from 'react-router-dom';
import FeatureProductDetail from './app/product/feature-product-detail/Feature-product-detail';

import './App.css';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/producto/:id' element={<FeatureProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
