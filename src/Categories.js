/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import balancedDietImg from './img/balanced-diet.jpg';

class Categories extends Component {
    render() {
        console.log('props', this.props);
        return (
            <div>
                <div className="category">
                    <h2>Balanced Diet</h2>
                    {/* Probably will need to update these heading levels */}
                    <a href="#" className="category-name" onClick={(e) => {
                        e.preventDefault();
                        console.log("balanced clicked");
                        this.props.onCategoryClicked("balanced");
                        
                    }}>
                        <img className="category-image" src={balancedDietImg} alt="Balanced Diet" />
                    </a>
                </div>

            </div>
        );
    }


}

export default Categories;
