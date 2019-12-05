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
                <h2>Healthy Categories</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12 category">
                            <a href="#" className="category-name" onClick={(e) => {
                                e.preventDefault();
                                console.log("balanced clicked");
                                this.props.onCategoryClicked("balanced");
                            }}>
                                <h3>Balanced Diet</h3>
                                <img className="category-image img-thumbnail" src={balancedDietImg} alt="Balanced Diet" />
                            </a>
                        </div>
                        <div className="col-md-6 col-12 category">
                            <a href="#" className="category-name" onClick={(e) => {
                                e.preventDefault();
                                console.log("high-protein clicked");
                                this.props.onCategoryClicked("high-protein");
                            }}>
                                <h3>High Protein</h3>
                                <img className="category-image img-thumbnail" src={highProteinImg} alt="High Protein" />
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12 category">
                            <a href="#" className="category-name" onClick={(e) => {
                                e.preventDefault();
                                console.log("high fiber clicked");
                                this.props.onCategoryClicked("high-fiber");
                            }}>
                                <h3>High Fiber</h3>
                                <img className="category-image img-thumbnail" src={highFiberImg} alt="High Fiber" />
                            </a>
                        </div>
                        <div className="col-md-6 col-12 category">
                            <a href="#" className="category-name" onClick={(e) => {
                                e.preventDefault();
                                console.log("low-fat clicked");
                                this.props.onCategoryClicked("low-fat");
                            }}>
                                <h3>Low Fat</h3>
                                <img className="category-image img-thumbnail" src={lowFatImg} alt="Low Fat" />
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12 category">
                            <a href="#" className="category-name" onClick={(e) => {
                                e.preventDefault();
                                console.log("high protein clicked");
                                this.props.onCategoryClicked("low-carb");
                            }}>
                                <h3>Low Carb</h3>
                                <img className="category-image img-thumbnail" src={lowCarbImg} alt="Low Carb" />
                            </a>
                        </div>
                        <div className="col-md-6 col-12 category">
                            <a href="#" className="category-name" onClick={(e) => {
                                e.preventDefault();
                                console.log("low-sodium clicked");
                                this.props.onCategoryClicked("low-sodium");
                            }}>
                                <h3>Low Sodium</h3>
                                <img className="category-image img-thumbnail" src={lowSodiumImg} alt="Low Sodium" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;
