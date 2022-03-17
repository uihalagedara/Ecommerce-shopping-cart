
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Screen
//import HomeScreen from "./screens/HomeScreen";
//import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import ItemHomeScreen from './screens/ItemHomeScreen';
import ItemScreens from './screens/ItemScreen';

//component
import Navbar  from './components/Navbar';

function App() {
  return (
    <Router>
     <Navbar />
     {/*sideFrawer*/}
     {/*Backdrop*/}
      <main>
        <Switch>
          {/*<Route exact path="/" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>*/}
          <Route exact path="/cart" component={CartScreen}/>
          <Route exact path="/item" component={ItemHomeScreen}>
          <Route exact path="/item/:id" component={ItemScreens}>
            </Route>
            </Route>
        </Switch>
      </main>

    </Router>
  );
}

export default App;
