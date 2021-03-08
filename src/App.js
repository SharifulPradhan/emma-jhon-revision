import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,
  Switch,
  Route,
  } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails';
function App() {
  return (
    <>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Shop />
          </Route>
          <Route path='/shop'>
            <Shop />
          </Route>
          <Route path='/review'>
            <h1> This is Product Review Page</h1>
          </Route>
          <Route path='/inventory'>
            <h1 className="bg-primary"> This is Product inventory Page</h1>
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
