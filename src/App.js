import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
import createBrowserHistory from "history/createBrowserHistory";

import Login from './components/layout/Login';
import AppNav from './components/layout/AppNav';
import AppNavAdmin from './components/layout/AppNavAdmin';
import Main from './components/layout/Main';
import Help from './components/layout/Help';
import FAQ from './components/layout/FAQ';
import Contact from './components/layout/Contact';
import Footer from './components/layout/Footer';
import OfferMain from './components/member/OfferMain';
import OfferForm from './components/member/OfferForm';
import PurchaseMain from './components/member/PurchaseMain';
import ProfileForm from './components/member/ProfileForm';
import MainAdmin from './components/layout/MainAdmin';
import MemberList from './components/admin/MemberList';
import CategoryList from './components/admin/CategoryList';
import SettingForm from './components/admin/SettingForm';
import './App.css';

class App extends Component {

  render() {
    const history = createBrowserHistory();
    return (
      <Router history={history}>
        <div className="container-fluid">

          <div className="row app-line">
            <div className="col-md-2">
              <img src="/bartzaar.png" height="100" alt="" />
            </div>
            <div className="col-md-10 app-nav">
              { history.location.pathname.search('admin') > 0 ? <AppNavAdmin /> : <AppNav /> }
            </div>
          </div>

          <div className="row app-main">
            <Switch>

              <Route exact path="/login" component={Login} />

              <Route exact path="/admin" component={MainAdmin} />
              <Route exact path="/members" component={MemberList} />
              <Route exact path="/categories" component={CategoryList} />
              <Route exact path="/setting" component={SettingForm} />

              <Route exact path="/" component={Main} />
              <Route exact path="/offers" component={OfferMain} />
              <Route exact path="/purchases" component={PurchaseMain} />
              <Route exact path="/profile" component={ProfileForm} />

              <Route exact path="/help" component={Help} />
              <Route exact path="/faq" component={FAQ} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/offer/:id" component={OfferForm} />

            </Switch>
          </div>

          <div className="row">
            <Footer />
          </div>

        </div>

      </Router>
    );
  }

}

export default App;
