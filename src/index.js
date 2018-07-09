import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import todos from './todos';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App initialDate={todos} />, document.getElementById('root'));
registerServiceWorker();
