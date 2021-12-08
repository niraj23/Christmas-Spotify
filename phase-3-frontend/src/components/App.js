import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import Home from './Home/Home'
import Dev from "./Devs/Dev"


function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" exact component={Home} /> 
            <Route path="/devs" exact component={Dev} /> 
            </Switch>
      </Router>
    </div>
  )
}

export default App;
