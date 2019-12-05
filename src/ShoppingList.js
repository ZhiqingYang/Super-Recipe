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

                    {this.props.shopping.map((ingredient) => {
                        return (
                            <li className="shop-box" key={ingredient}>

                                <p className="ingredient">
                                    {ingredient}
                                </p>
                                <a href="#" onClick={(e)=>{this.props.remove(ingredient);}}>remove</a>

                            </li>
                        );
                    })}
                </ul>

                <button type="button" className="btn btn-secondary" id="clear-shopping-list" onClick={(e) => {
                    this.props.clearAll();

                }}>
                    Clear All
                </button>
            </div>
        );
    }
}

export default ShoppingList;
