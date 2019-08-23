import React from 'preact';

import axios from 'axios';
import OnVisible from 'react-on-visible';
import { route } from 'preact-router';
import {Link} from 'preact-router';

import './styles.scss';

class Gallery extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            title: ""
        }

        this.fetchPhotos();
    }

    fetchPhotos = (id = this.props.id) => {
        this.setState({fetched: false})
        axios.get('/gallery/' + id).then(response => {
            const gallery = response.data.payload;
            if(!gallery.photos) gallery.photos = [];
            this.setState({
                ...gallery,
                fetched: true
            })
        }).catch(err => {
            if(err) throw err;
        });
    }

    _goToPost = p => route('/p/' + p.id);

    componentWillReceiveProps(props) {
        this.fetchPhotos(props.id);
    }

    render() {
        return (
            <div class="page gallery">
                {this.state.fetched && <div class="photos-container fadein">
                    <h1>{this.state.title.toUpperCase()}</h1>
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

export default Gallery;