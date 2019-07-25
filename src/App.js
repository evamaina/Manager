import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentDidMount() {
        const firebaseConfig = {
            apiKey: 'AIzaSyAqp2vjphah5SS6MOs4mrH89N9laGHH4rg',
            authDomain: 'manager-863bf.firebaseapp.com',
            databaseURL: 'https://manager-863bf.firebaseio.com',
            projectId: 'manager-863bf',
            storageBucket: '',
            messagingSenderId: '1032013361137',
            appId: '1:1032013361137:web:c06fde93704c9163'
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
               <Router />
            </Provider>
            
        );
    }
}
export default App;

