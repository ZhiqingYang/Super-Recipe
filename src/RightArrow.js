import React from 'react';
import './App.css';


class NextArrow extends React.Component {
    render = (props) => {
        return (
          <div 
          onClick={this.props.nextImage}>
            <a href="/#" >
                <i className="arrow fa fa-chevron-right" aria-hidden="true"  id="right-arrow">
                </i>
            </a>
           
        </div>
        );
    }
}

export default NextArrow;