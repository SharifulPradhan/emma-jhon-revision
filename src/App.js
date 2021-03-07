import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from 'react-router-dom';
function App() {
  return (
    <>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Shop />
          </Route>
       </Switch>
      </Router>
    </>
    
  );
}

export default App;
