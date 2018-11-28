import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import Login from '../components/Login';
import AdminDashboard from '../components/AdminDashboard';
import AddPostPage from '../components/AddPostPage';
import EditPostPage from '../components/EditPostPage';
import NotFoundPage from '../components/NotFoundPage';
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
          <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;