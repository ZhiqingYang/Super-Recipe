/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    removeAll = () => {
        localStorage.removeItem("ingredients");
    }
    render() {
        return (
            <div>
                <h2 id="shop-title">Shopping List</h2>
                <ul>
                    {this.props.shoppingList.map((ingredient) => {
                        return (
                            <li className="shop-box" key={ingredient}>
                                <p className="ingredient">
                                    {ingredient}
                                </p>
                            </li>
                        );
                    })}
                </ul>

                <button id="clear-shopping-list" onClick={(e) => {
                    this.removeAll();
                }}>
                    Clear All
                </button>
            </div>
        );
    }
}

export default ShoppingList;
