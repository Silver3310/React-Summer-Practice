import React, {Component} from 'react';

import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div>
                Home Page
                <br/>
                <Link to="/owner/places">Посмотреть свои заведения</Link>
            </div>
        );
    }
}

export default Home;