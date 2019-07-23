import React, {Component} from 'react';

import ShopList from '../../containers/ShopList';


class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>Home</h1>
                <ShopList />
            </React.Fragment>
        );
    }
}

export default Home;