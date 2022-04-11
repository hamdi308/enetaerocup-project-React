import './App.css';
import React, {useState,useEffect} from 'react'
import Home from './components/pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loader from './components/loader'


function App() {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    },3000)

  },[])
  return loader === true ? (
          <Loader />
  ) :
   (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  )
}

export default App;
