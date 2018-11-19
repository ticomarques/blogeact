import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import Login from '../components/Login';
import AdminDashboard from '../components/AdminDashboard';
import AddPost from '../components/AddPost';
import EditPost from '../components/EditPost';
  import Blog from '../components/Blog';
  import ViewPost from '../components/ViewPost';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/login" component={Login} exact={true} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/create" component={AddPost} />
        <Route path="/edit/:id" component={EditPost} />
          <Route path="/" component={Blog} />
          <Route path="/post/:id" component={ViewPost} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;