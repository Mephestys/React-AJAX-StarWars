import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import InfoSheet from "./components/InfoSheet/InfoSheet";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={App} exact />
      <Route path="/InfoSheet/:id" render={(props) => <InfoSheet {...props} /> } />
    </div>
  </BrowserRouter>,
document.getElementById('root'));
