import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './Components/Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
