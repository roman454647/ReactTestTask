import React from 'react';
import './App.css';
import {MyForm} from "./components/Form";
import {MyTable} from "./components/Table";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {UserReducer} from "./redux/reducer";
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

// @ts-ignore
const store = createStore(UserReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga);


const App = () => {
   return (
    <div className="App">
        <Provider store={store}>
            <MyTable/>
            <MyForm/>
        </Provider>
     </div>
   )
}

export default App;
