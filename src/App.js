import './App.css';
import  {Navigation}  from './components/Navigation/Navigation';
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
    <Navigation/>
  )

}

export default App;
