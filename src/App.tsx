import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Carts from './Components/CartProduct';
import Home from './Components/Home';
import Layout from './Components/Layout';
import Page from './Components/Page';
import { store } from './store';
import { asyncAction } from './store/fetchAll/action';


function App() {
  React.useEffect(() => {
    store.dispatch(asyncAction())
},[])
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element={<Layout />} >
            <Route path='/' element={<Home />} />
            <Route path='/:link' element={<Page />} />
            <Route path='carts' element={<Carts/>}/>
          </Route>
          <Route path='*' element={<p>Error</p>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
