/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import balancedDietImg from './img/balanced-diet.jpg';
import highProteinImg from './img/high-protein.jpg';
import lowFatImg from './img/low-fat.png';
import highFiberImg from './img/high-fiber.jpg';
import lowCarbImg from './img/low-carb.jpg';
import lowSodiumImg from './img/low-sodium.jpg';
import './css/Categories.css';

class Categories extends Component {
    render() {
        console.log('props', this.props);
        return (
            <div>
                <h2>Categories</h2>
                <div className="category">
                    <h3>Balanced Diet</h3>
                    {/* Probably will need to update these heading levels */}
                    <a href="#" className="category-name" onClick={(e) => {
                        e.preventDefault();
                        console.log("balanced clicked");
                        this.props.onCategoryClicked("balanced");
                    }}>
                        <img className="category-image" src={balancedDietImg} alt="Balanced Diet" />
                    </a>
                </div>

                <div className="category">
                    <h3>High Protein</h3>
                    {/* Probably will need to update these heading levels */}
                    <a href="#" className="category-name" onClick={(e) => {
                        e.preventDefault();
                        console.log("high-protein clicked");
                        this.props.onCategoryClicked("high-protein");
                    }}>
                        <img className="category-image" src={highProteinImg} alt="High Protein" />
                    </a>
                </div>

                <div className="category">
                    <h3>High Fiber</h3>
                    {/* Probably will need to update these heading levels */}
                    <a href="#" className="category-name" onClick={(e) => {
                        e.preventDefault();
                        console.log("high fiber clicked");
                        this.props.onCategoryClicked("high-fiber");
                    }}>
                        <img className="category-image" src={highFiberImg} alt="High Fiber" />
                    </a>
                </div>

                <div className="category">
                    <h3>Low Fat</h3>
                    {/* Probably will need to update these heading levels */}
                    <a href="#" className="category-name" onClick={(e) => {
                        e.preventDefault();
                        console.log("low-fat clicked");
                        this.props.onCategoryClicked("low-fat");
                    }}>
                        <img className="category-image" src={lowFatImg} alt="Low Fat" />
                    </a>
                </div>

                <div className="category">
                    <h3>Low Carb</h3>
                    {/* Probably will need to update these heading levels */}
                    <a href="#" className="category-name" onClick={(e) => {
                        e.preventDefault();
                        console.log("high protein clicked");
                        this.props.onCategoryClicked("low-carb");
                    }}>
                        <img className="category-image" src={lowCarbImg} alt="Low Carb" />
                    </a>
                </div>

                <div className="category">
                    <h3>Low Sodium</h3>
                    {/* Probably will need to update these heading levels */}
                    <a href="#" className="category-name" onClick={(e) => {
                        e.preventDefault();
                        console.log("low-sodium clicked");
                        this.props.onCategoryClicked("low-sodium");
                    }}>
                        <img className="category-image" src={lowSodiumImg} alt="Low Sodium" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Categories;
