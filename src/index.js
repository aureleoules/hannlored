import React from 'preact';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import axios from 'axios';
axios.defaults.baseURL = 'https://backpulse.herokuapp.com/hannlore';

React.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
