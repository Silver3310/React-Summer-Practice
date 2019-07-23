import React, {Component} from 'react';

import AddCafeteria from './add_cafeteria';
import MyCafeterias from './my_cafeterias';


class ControlCafeteriaPanel extends Component {
    render() {
        return (
            <div>
                <MyCafeterias/>
                <AddCafeteria/>
            </div>
        );
    }
}

export default ControlCafeteriaPanel;