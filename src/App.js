import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,
  Switch,
  Route,
  } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Shop />
          </Route>
          <Route path='/shop'>
            <Shop />
          </Route>
          <Route path='/review'>
            <Review />
          </Route>
          <Route path='/inventory'>
            <Inventory/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/shipment'>
            <Shipment/>
          </Route>
          <Route path='/product/:productKey'>
            <ProductDetails />
          </Route>
          <Route path='*'>
            <h1 className="bg-danger"> Sorry Invalid URL</h1>
          </Route>
       </Switch>
      </Router>
    </>
    
  );
}

export default App;
