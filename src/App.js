import React from 'preact';
import Router from 'preact-router';

import Home from './pages/Home';
import Photo from './pages/Photo';
import Gallery from './pages/Gallery';

import Menu from './components/Menu';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Menu history={history}/>
                <Router history={history}>
                    <Home exact path="/"/>
                    <Photo path="/p/:id"/>
                    <Gallery path="/g/:id"/>
                </Router>
            </div>
		);
    }
}

export default App;
