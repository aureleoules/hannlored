import React from 'preact';

import axios from 'axios';
import './styles.scss';
class Photo extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            title: "",
            content: "",
            fetched: false
        };
        console.log(props);

        this.fetchPhoto();
    }

    fetchPhoto = () => {
        axios.get('/photos/' + this.props.id).then(response => {
            const photo = response.data.payload;
            this.setState({
                ...photo,
                fetched: true
            })
        }).catch(err => {
            if(err) throw err;
        });
    }

    render() {
        return (
            <div class="page photo">
                {this.state.fetched && <div class="photo">
                    <h1>{this.state.title}</h1>
                    <img src={this.state.url}/>
                    <p>{this.state.content}</p>
                </div>}
            </div>
        );
    }
}

export default Photo;