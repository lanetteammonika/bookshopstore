"use strict"
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers/index';
import {addToCart} from './actions/cardActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';
import BookList from './components/pages/bookList';
import BookForm from './components/pages/bookForm';
import Cart from './components/pages/cart';
import Main from './main'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
const middleware = applyMiddleware(thunk,logger);


const store = createStore(reducers, middleware);


const Routes = (

    <Provider store={store}>
        <div>
        <Router history={browserHistory} >
            <Route path="/" component={Main}>
                <IndexRoute component={BookList} />
                <Route path="/admin" component={BookForm}/>
                <Route path="/cart" component={Cart}/>
            </Route>
        </Router>
        </div>
    </Provider>

)

render(
    Routes, document.getElementById('app')
)
