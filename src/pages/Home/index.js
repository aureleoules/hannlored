import React from 'preact';

import './styles.scss';
import {Link} from 'preact-router';
import axios from 'axios';

import OnVisible from 'react-on-visible';
import { route } from 'preact-router';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            fetched: false
        };

        console.log(props);

        axios.get('/photos').then(response => {
            const photos = response.data.payload || [];
            photos.reverse();
            this.setState({photos, fetched: true})
        }).catch(err => {
            if(err) throw err;
        });
    }

    _goToPost = p => route('/p/' + p.id);

    render() {
        return (
            <div class="page home">
                {this.state.fetched && <div class="photos-container">
                    {this.state.photos.map((p, i) => (
                        <OnVisible onChange={v => console.log(v)} className="photo-container" visibleClassName={"slide-top visible"} percent={15}>
                            {/* <Link href={"/p/" + p.id}>
                                {p.title}
                            </Link> */}
                            <img alt={p.title} onClick={() => this._goToPost(p)} src={p.url}/>
                        </OnVisible>
                        )
                    )}
                </div>}
            </div>
        );
    }
}

export default Home;