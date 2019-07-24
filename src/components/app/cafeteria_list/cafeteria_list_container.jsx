import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavLink } from "react-router-dom";

import './cafeteria_list.scss';


class CafeteriaListContainer extends Component {

    // iterate through all shops to show only the name
    createListItems() {
        return this.props.cafeterias.map((cafeteria) => {
            return (
                <NavLink to="#" className="vertical-menu__link" warning key={cafeteria.id}>{cafeteria.name}</NavLink>
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
