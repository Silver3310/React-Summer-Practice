import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import './cafeteria-list.scss';


class CafeteriaListContainer extends Component {

    // iterate through all shops to show only the name
    createListItems() {
        return this.props.cafeterias.map((cafeteria) => {
            return (
                <Link to="#" warning key={cafeteria.id}>{cafeteria.name}</Link>
            )
        })
    }

    render() {
        return (
            <div className="vertical-menu">
                {this.createListItems()}
            </div>
        );
    }
}

// create a container
function mapStateToProps(state) {
    return {
        cafeterias: state.cafeterias
    };
}


export default connect(mapStateToProps)(CafeteriaListContainer);
