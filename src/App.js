import './App.css';
import  {Navigation}  from './components/Navigation/Navigation';
import { Hero } from './components/Hero/Hero';
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
    <Hero></Hero>
    </>
  )

}

export default App;
