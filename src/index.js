import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
