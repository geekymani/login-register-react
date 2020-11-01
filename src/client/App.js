import React from 'react';
import { connect } from 'react-redux';
import {
  Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';

import { history } from './_helpers';
import { alertActions } from '../client/state-management/actions';
import { PrivateRoute } from './components/PrivateRoute';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginNewPage';
import { RegisterPage } from './pages/RegisterNewPage';

class App extends React.Component {
  constructor(props) {
      super(props);

      history.listen((location, action) => {
          // clear alert on location change
          this.props.clearAlerts();
      });
  }

  render() {
      const { alert } = this.props;
  return (
    <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert?.message &&
                            <div className={`alert ${alert?.type}`}>{alert?.message}</div>
                        }
      <Router history={history}>
        <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/login" component={LoginPage}/>
            <Route path="/register" component={RegisterPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
      </div>
      </div>
      </div>
  );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };




// import React, { Component } from 'react';
// import './app.css';
// import ReactImage from './react.png';
//
// export default class App extends Component {
//   state = { username: null };
//
//   componentDidMount() {
//     fetch('/api/getUsername')
//       .then(res => res.json())
//       .then(user => this.setState({ username: user.username }));
//   }
//
//   render() {
//     const { username } = this.state;
//     return (
//       <div>
//         {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
//         <img src={ReactImage} alt="react" />
//       </div>
//     );
//   }
// }
