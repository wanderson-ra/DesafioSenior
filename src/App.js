import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './redux/reducers/index';
import Routers from './redux/router/Routers';

class App extends Component {  
  
    render() {  
      return (  
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>        
            <Routers />          
        </Provider>
      );
    }  
  }  
  
  export default App;