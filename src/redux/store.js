import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export {store};
