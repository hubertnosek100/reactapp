import React from 'react';
import './App.css';
import AppNavbar from './components/navbar/navbar';
import MainContainer from './components/main/main-container';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/root-reducer";

let store = createStore(reducers, applyMiddleware(thunk));

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <AppNavbar />
        <MainContainer />
      </Provider>
    </div>
  );
} 

export default App;
