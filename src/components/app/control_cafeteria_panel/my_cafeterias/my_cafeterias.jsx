import React, {Component} from 'react';

import CafeteriaListContainer from '../../cafeteria_list';


class MyCafeterias extends Component {
    render() {
        return (
            <div>
                <h4>Мои заведения</h4>
                <CafeteriaListContainer />
            </div>
        );
    }
}

export default MyCafeterias;