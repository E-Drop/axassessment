import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GnomeListContainer from './containers/GnomeListContainer';
import Child from './components/Child';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';

const store = configureStore();

ReactDOM.render( 
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={Navigation}/>
            <Route path="/" exact component={GnomeListContainer} />
            <Route path="/gnome/:id" component={Child}/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
