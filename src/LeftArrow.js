import React from 'react';

// const LeftArrow = (props) => {
//     return (
//         <div className="backArrow" onClick={props.goToPrevSlide}>
//             <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
//         </div>
//     );
// };




class BackArrow extends React.Component {
    render = (props) => {
        return (
        <div 
        onClick={this.props.previousImage} 
        style={{fontSize: '2em', marginRight: '12px', color: 'black', position: "absolute", top: "50%"}}>
        <button id="left-arrow">
            <i className="arrow fa fa-chevron-left" aria-hidden="true"></i>
        </button>
           
        </div>
        );
    }
}

export default BackArrow;
