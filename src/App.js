import './App.css';
import  Navigation  from './components/Navigation/Navigation';
import { All } from './components/All/All';
import  {Tech } from "./components/Tech/Tech.jsx"
import { Clothes } from './components/Clothes/Clothes';
import { Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route path = "/" element = {<All/>}>
          <Route index element = {<Navigation/>}></Route>   
        </Route>
          <Route path = "/clothes" element = {<Clothes/>}>
          <Route index element = {<Navigation/>}></Route>   
        </Route>

        <Route path = "/tech" element = {<Tech/>}>
          <Route index element = {<Navigation/>}></Route>   
        </Route>
      

        {/* <Route path = "/:ProductCardId" element = {<productDescriptionPage/>}>  
          </Route> 
         */}
      </Routes>
    </>
  )

}

export default App;
