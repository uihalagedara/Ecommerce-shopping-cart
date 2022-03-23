
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Screen
//import HomeScreen from "./screens/HomeScreen";
//import ProductScreen from "./screens/ProductScreen";
import CartScreens from "./screens/CartScreen";
import ItemHomeScreens from './screens/ItemHomeScreen';
import ItemScreen from './screens/ItemScreen';

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
          <Route exact path="/cart" component={CartScreens}/>
          <Route exact path="/item" component={ItemHomeScreens}>
          <Route exact path="/item/:id" component={ItemScreen}>
            </Route>
            </Route>
        </Switch>
      </main>

    </Router>
  );
}

export default App;
