import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import Main from './components/MainComponent'
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import './App.css';

class App extends Component {
   
  render(){
  return (
    <BrowserRouter>
    <div className="App">
     <Main />
    </div>
    </BrowserRouter>
  );
}
}

export default App;
