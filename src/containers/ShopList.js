import React, {Component} from 'react';
import {connect} from 'react-redux';


class ShopList extends Component {

    // iterate through all shops to show only the name
    createListItems() {
        return this.props.shops.map((shop) => {
            return (
                <li key={shop.id}>{shop.name}</li>
            )
        })
    }

    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        );
    }
}

// create a container
function mapStateToProps(state) {
    return {
        shops: state.shops
    };
}


export default connect(mapStateToProps)(ShopList);