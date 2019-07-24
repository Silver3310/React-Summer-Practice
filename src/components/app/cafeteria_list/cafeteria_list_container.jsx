import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import { NavLink } from "react-router-dom";

import { fetchAllCafeterias } from '../../../actions/cafeterias_actions';

import './cafeteria_list.scss';


class CafeteriaListContainer extends Component {

    // as soon as the component mounts
    componentWillMount() {
        this.props.fetchAllCafeterias();
    }

    // iterate through all shops to show only the name
    createListItems() {
        return this.props.cafeterias.map((cafeteria) => {
            return (
                <NavLink to="#" className="vertical-menu__link" key={cafeteria.id}>{cafeteria.name}</NavLink>
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

CafeteriaListContainer.propTypes = {
    fetchAllCafeterias: PropTypes.func.isRequired,
    cafeterias: PropTypes.array.isRequired
};

// create a container
function mapStateToProps(state) {
    return {
        cafeterias: state.cafeterias.items,
    };
}


export default connect(
    mapStateToProps,
    { fetchAllCafeterias }
)(CafeteriaListContainer);
