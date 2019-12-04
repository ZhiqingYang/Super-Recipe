/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    removeAll = () => {

        localStorage.setItem("ingredients", JSON.stringify(this.state.savedLocations));

    }

    handleCheckboxChange = clicked =>
        this.setState({ checked: clicked.target.true });

    render() {
        return (
            <div>
                <h2>Shopping List</h2>
                <ul>
                    {this.props.ShoppingList.map((ingredient) => {
                        return (
                            <li key={ingredient}>
                                <form>
                                    <input type="checkbox" className="ingredient-checkbox" name={ingredient} onChange={(e) => {
                                        console.log(e.target.value);
                                        this.props.onChange(e.target.value);
                                    }} /> />
                                </form>
                                <p className="ingredient">
                                    {ingredient}
                                </p>
                            </li>
                        );
                    })}
                </ul>

                <button id="clear-shopping-list" onClick={(e) => {
                    // delete the things
                    // clearing local storage for list items
                }}>
                    Clear All
                </button>
            </div>
        );
    }
}

export default ShoppingList;
