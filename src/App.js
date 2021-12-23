
import './App.css';
import Home from './component/Home/Home';
import Friend from './component/Friend/Friend';
import Detail from './component/Detail/Detail';
import Countres from './component/Countres/Countres';
import NoMatch from './component/NoMatch/NoMatch';
import CountryDetail from './component/CountryDetail/CountryDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/friend">
            <Friend />
          </Route>
          <Route path="/detail/:detail_id">
            <Detail/>
          </Route>
          <Route path="/countres">
            <Countres/>
          </Route>
          <Route path="/country/:countryName">
            <CountryDetail/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
