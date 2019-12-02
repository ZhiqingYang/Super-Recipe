import React from 'react';



class NextArrow extends React.Component {
    render = (props) => {
        return (
          <div 
          onClick={this.props.nextImage}
          style={{fontSize: '2em', marginRight: '12px', color: 'black', position: "absolute", top: "50%", right: "250px"}}>
        <button id="right-arrow">
            <i className="arrow fa fa-chevron-right" aria-hidden="true"></i>
        </button>
           
        </div>
        );
    }
}

export default NextArrow;