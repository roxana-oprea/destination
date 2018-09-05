import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './app/App';

export default class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    );
  }
}
