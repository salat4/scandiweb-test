import './App.css';
import  Navigation  from './components/Navigation/Navigation';
import { Hero } from './components/Hero/Hero';
import { Routes, Route } from "react-router-dom";
import productDescriptionPage from "./components/productDescriptionPage/productDescriptionPage.jsx"
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
        <Route path = "/" element = {<Hero/>}>
           
          <Route index element = {<Navigation/>}></Route>
           
        </Route>
        <Route path = "/:ProductCardId" element = {<productDescriptionPage/>}>  
          </Route> 
        
      </Routes>
    {/* <Navigation />
    <Hero></Hero> */}
    </>
  )

}


// function mapStateToProps(state) {
//   return { currency: state.currency }
// }

export default App;
