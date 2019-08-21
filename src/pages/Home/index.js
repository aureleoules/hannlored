import React from 'preact';

import './styles.scss';
import {Link} from 'preact-router';
import axios from 'axios';

import OnVisible from 'react-on-visible';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            fetched: false
        };

        axios.get('/photos').then(response => {
            const photos = response.data.payload || [];
            console.log(photos);
            this.setState({photos, fetched: true})
        }).catch(err => {
            if(err) throw err;
        });

    }

    render() {
        return (
            <div class="page home">
                {this.state.fetched && <div class="photos-container">
                    {this.state.photos.map((p, i) => (
                        <OnVisible className="photo-container" visibleClassName={"slide-top"} percent={10}>
                                <Link href={"/p/" + p.id}>
                                    {p.title}
                                </Link>
                                <img src={p.url}/>
                        </OnVisible>
                        )
                    )}
                </div>}
            </div>
        );
    }
}

export default Home;