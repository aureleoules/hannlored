import React from 'preact';

import axios from 'axios';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {};

        axios.get('/photos').then(response => {
            const photos = response.data.payload;
            console.log(photos);
        }).catch(err => {
            if(err) throw err;
        });

    }

    render() {
        return (
            <div>
                Home
            </div>
        );
    }
}

export default Home;