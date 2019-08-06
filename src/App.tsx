import React from 'react';
import './App.css';
import AppNavbar from './components/navbar/navbar';
import MainContainer from './components/main/main-container';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppNavbar />
      <MainContainer/>
    </div>
  );
}

export default App;
