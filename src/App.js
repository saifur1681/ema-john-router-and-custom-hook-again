import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Inventory from './Component/Inventory/Inventory';
import NotFound from './Component/NotFound/NotFound';
import OrderReview from './Component/OrderReview/OrderReview';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/" element={<Navigate to="/shop" ></Navigate>}></Route>
          <Route path="/order" element={<OrderReview></OrderReview>} ></Route>
          <Route path="/inventory" element={<Inventory></Inventory>} ></Route>
          <Route path="/notFound" element={<NotFound></NotFound>} ></Route>
          <Route path="*" element={<Navigate to="/notFound" ></Navigate>} ></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
