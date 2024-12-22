import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios'

import './App.css'
import Header from './components/Header/Header'
import FilterBar from './components/FilterBar/FilterBar'
import ProductsContainer from './components/ProductsContainer/ProductsContainer'
import ProductDetail from './components/ProductDetail/ProductDetail';
import Basket from './components/Basket/Basket';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute';
import UserProfile from './components/UserProfile/UserProfile';
import { useAuth } from './hooks/useAuth.jsx';
import api from './api/api';


function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);
  const [deleteProductId, setDeleteProductId] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([])
  const { isAuthenticated } = useAuth(); 



  const getProducts = () => {
    api.get('/product/')
    .then(res => {
    // console.log(res.data.response)
      setProducts(res.data.response)
      setFilteredProducts(res.data.response)
      setIsLoading(false)
    })
    .catch(err => alert('Transaction failed!: ', err))
  }
  

  useEffect(() => {
    // console.log("Authenticated: ", isAuthenticated)
    if(isAuthenticated){
    getProducts()
    }
  }, [isAuthenticated])


  const handleAddToBasket = (productId) => {
    // console.log(productId)
    const selectedProduct = filteredProducts.find(product => product._id === productId)
    setBasket((prev) => {
      const updatedBasket = [...prev, selectedProduct]
      // console.log("Updated Basket:", updatedBasket)
      return updatedBasket
    })
  }; 

  const handleRemoveFromBasket = (productId) => {
    // console.log("handleRemove first: ", basket)
    setBasket ((prevBasket) => {
      const selectedProductIndex = basket.findIndex(product => product._id === productId)
      if(selectedProductIndex !== -1 ){
        return [
          ...prevBasket.slice(0, selectedProductIndex),
          ...prevBasket.slice(selectedProductIndex + 1)
        ]
      }
      return prevBasket
    })
  };

  return (
    
    <Router>
      <Header basket={basket}/>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <>
                <FilterBar 
                products={products} 
                setFilteredProducts={setFilteredProducts}
                />
                <ProductsContainer 
                filteredProducts={filteredProducts} 
                handleAddToBasket={handleAddToBasket}
                handleRemoveFromBasket={handleRemoveFromBasket}
                />
              </>
            </PrivateRoute>
          }
        />

        <Route path='/product/:id' element={
          <PrivateRoute>
            <ProductDetail products={products}/>
          </PrivateRoute>
          }/>
        <Route path='/basket' element={
          <PrivateRoute>
            <Basket 
            basket={basket}
            setBasket={setBasket}
            />
          </PrivateRoute>
          }/>

      </Routes>
    </Router>
   
  )
}

export default App
