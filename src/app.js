import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'; //cria Link e NavLink
import configureStore from './store/configureStore';
  import { addPost } from './actions/posts';
  import { sortByCategory } from './actions/filters';
import getVisiblePosts from './selectors/posts';



import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();


  store.dispatch(addPost({ title: 'Using React', category: 'React', content: 'Starting a simple tuto about this amazing library'}));
  store.dispatch(addPost({ title: 'Using filter()', category: 'JS', content: 'Explaining how to use this amazing method'}));
  store.dispatch(addPost({ title: 'Using mixins', category: 'SCSS/SASS', content: 'Use mixins always, save code'}));
  store.dispatch(addPost({ title: 'Yarn add', category: 'Yarn', content: 'NPM or Yarn ? Good question, lets talk about it'}));
  
  store.dispatch(addPost({ title: 'ES6 Spread Operator', category: 'JS', content: 'A super useful ES6 feature, I can not live without it.'}));
  store.dispatch(addPost({ title: 'Using includes()', category: 'JS', content: 'Use this method to check in the value is in the prop.'}));
  store.dispatch(addPost({ title: 'Nesting &', category: 'SCSS/SASS', content: 'Type less code using nesting & in your scss/sass files.'}));
  store.dispatch(addPost({ title: 'Yarn scripts', category: 'Yarn', content: 'Execute yarn run to run the scripts defined in package.json'}));
  //store.dispatch(sortByCategory('js'));


const state = store.getState(); // ?
console.log(state);
const visiblePosts = getVisiblePosts(state.posts, state.filters);// state.filters tem que ver o que esta rolando no actions posts


const jsx = (
  <Provider store={store}>
      <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
