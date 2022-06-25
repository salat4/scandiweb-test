import './App.css';
import  Navigation  from './components/Navigation/Navigation';
import { Hero } from './components/Hero/Hero';
import { connect } from "react-redux";

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
  
    <Navigation />
    <Hero></Hero>
    </>
  )

}


// function mapStateToProps(state) {
//   return { currency: state.currency }
// }

export default App;
