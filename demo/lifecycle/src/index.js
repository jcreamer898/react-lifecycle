import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// Code goes here

render(<App />, document.body);
registerServiceWorker();
