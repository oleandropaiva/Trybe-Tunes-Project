import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Album from '../pages/Album';
import Favorites from '../pages/Favorites';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import ProfileEdit from '../pages/ProfileEdit';
import Search from '../pages/Search';

class Content extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={ Login } exact />
        <Route path="/Search" component={ Search } />
        <Route path="/album/:id" component={ Album } />
        <Route path="/favorites" component={ Favorites } />
        <Route path="/profile/edit" component={ ProfileEdit } />
        <Route path="/profile" component={ Profile } />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default Content;
