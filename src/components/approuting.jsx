import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./register";
import Login from "./login";
import Home from "./home";

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* both /roster and /roster/:number begin with /roster */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  </Router>

  /* <Route path='/page' component={Page} />
const extraProps = { color: 'red' }
<Route path='/page' render={(props) => (
  <Page {...props} data={extraProps}/>
)}/>
<Route path='/page' children={(props) => (
  props.match
    ? <Page {...props}/>
    : <EmptyPage {...props}/>
)}/> */
);

export default AppRouter;
