import { Switch, Route } from 'react-router-dom';

import UsersHome from './pages/users/users-home';
import PostsHome from './pages/posts/posts-home';
import Home from './pages/home/home';

import Theme from './components/theme';
import Navigation from './components/navigation/navigation';

import './App.css';

function App() {
  return (
    <div className="container">
      <Navigation />
      <Theme>
        <Switch>
          <Route path="/users">
            <UsersHome />
          </Route>
          <Route path="/posts">
            <PostsHome />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Theme>
    </div>
  );
}

export default App;
