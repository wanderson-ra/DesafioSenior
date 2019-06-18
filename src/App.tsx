import React, { Component } from 'react';
import Router from '../src/redux/router/Router';
import { Provider } from 'react-redux';

import store from './redux/reducers/index';

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}
export default App;