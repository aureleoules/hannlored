import React from 'preact';

import './styles.scss';

import {Link} from 'preact-router';

import axios from 'axios';
import Logo from '../../assets/hannlorelogo.png';
import FacebookLogo from '../../assets/facebook.svg';

class Menu extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            galleries: [],
            fetched: false,

            pathname: props.history.location.pathname
        }
        this.fetchGalleries();
        this.props.history.listen((location, action) => {
            this.setState({pathname: location.pathname});
        });
    }

    fetchGalleries = () => {
        axios.get('/galleries').then(response => {
            const galleries = response.data.payload || [];
            console.log(galleries);
            this.setState({
                galleries,
                fetched: true
            })
        }).catch(err => {
            if(err) throw err;
        });
    }

    render() {
        return (
            <div class="menu">
                <Link class="logo" href="/">
                    <img src={Logo} width="150"/>
                    <br/>
                    <img width="200" src="https://storage.googleapis.com/files.backpulse.io/5d5db59d25644939449646b3"/>
                </Link>

                <div class="galleries">
                    <ul>
                        {this.state.galleries.map((g, i) => (
                            <li class="tracking-in-expand">
                                <Link class={this.state.pathname.includes(g.short_id) ? "active" : ""} href={"/g/" + g.short_id}>
                                    {g.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <a href="https://www.facebook.com/profile.php?id=100010261752053" target="_blank">
                    <img style={{marginBottom: 15}} src={FacebookLogo}/>
                </a>
                <div>
                </div>
            </div> 
        );
    }
}

export default Menu;
