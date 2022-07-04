import './App.css';
import  Navigation  from './components/Navigation/Navigation';
import { All } from './components/All/All';
import  {Tech } from "./components/Tech/Tech.jsx"
import { Clothes } from './components/Clothes/Clothes';
import { Routes, Route } from "react-router-dom";
import ProductDescriptionPage from "./components/productDescriptionPage/productDescriptionPage"
import {A} from "./components/productDescriptionPage/productDescriptionPage"

import {
  ApolloClient,
  InMemoryCache
} from "@apollo/client";
export const  client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

function App() {
  
  return(
    <>
      <Navigation/>
      <Routes>
        
        <Route path = "/" element = {<All/>}/>
        <Route path = "/clothes" element = {<Clothes/>}/>
        <Route path="/tech" element={<Tech />} />
        
        <Route path = "/clothes/:ProductCardId" element = {<ProductDescriptionPage/>}/>  
        <Route path = "/tech/:ProductCardId" element = {<ProductDescriptionPage/>}/>  
      </Routes>
    </>
  )

}

export default App;
