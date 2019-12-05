import React from 'react';
import './App.css';

class BackArrow extends React.Component {
    render = (props) => {
        return (
            <div
                onClick={this.props.previousImage} >
                <a href="/#">
                    <i  className="arrow fa fa-chevron-left" aria-hidden="true"  id="left-arrow"/>
                </a>

            </div>
        );
    }
}

export default BackArrow;
