import React from 'preact';
import Router from 'preact-router';

import Home from './pages/Home';
import Photo from './pages/Photo';
import Gallery from './pages/Gallery';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
			<Router>
				<Home path="/"/>
				<Photo path="/p/:id"/>
				<Gallery path="/g/:id"/>
			</Router>
		);
    }
}

export default App;
