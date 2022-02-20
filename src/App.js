import './App.css';
import Home from './components/pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactusPage from './components/pages/contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/ContactusPage" component={ContactusPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
