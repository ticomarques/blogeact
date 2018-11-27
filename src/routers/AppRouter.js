import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import Login from '../components/Login';
import AdminDashboard from '../components/AdminDashboard';
import AddPostPage from '../components/AddPostPage';
import EditPostPage from '../components/EditPostPage';
  import Blog from '../components/Blog';
  import ViewPost from '../components/ViewPost';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/login" component={Login}  />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/create" component={AddPostPage} />
        <Route path="/edit/:id" component={EditPostPage} />
          <Route path="/" component={Blog} exact={true} />
          <Route path="/post/:id" component={ViewPost} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;