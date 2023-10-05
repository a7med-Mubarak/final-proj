import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import Brands from './Components/Brands/Brands';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Categories from './Components/Categories/Categories';
import Profile from './Components/Profile/Profile';
import Layout from './Components/Layout/Layout';
import NotFound from './Components/NotFound/NotFound';
import CounterContextProvider from './Context/CounterContext';
import UserContextProvider, { UserContext } from './Context/UserContext';
import { useContext, useEffect } from 'react';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import CartContextProvider, { CartContext } from './Context/CartContext';
import  { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import Address from './Components/Address/Address';




let routes = createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    {index:true , element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:'Products' , element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:'Cart' , element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path:'Categories' , element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:'Profile' , element:<ProtectedRoute><Profile/></ProtectedRoute>},
    {path:'Brands' , element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path:'Address' , element:<ProtectedRoute><Address/></ProtectedRoute>},
    {path:'ProductDetails/:id' , element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path:'Login' , element:<Login/>},
    {path:'Register' , element:<Register/>},
    {path:'*',element:<NotFound/>},
  ] }
])

function App() {

  return <CartContextProvider>
        <UserContextProvider>
              <Provider store={store}>
                <RouterProvider router={routes}></RouterProvider>
                <Toaster/>
              </Provider>
        </UserContextProvider>
      </CartContextProvider>
  
}

export default App;
