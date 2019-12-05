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

        localStorage.setItem("ingredients", JSON.stringify(this.state.savedLocations));

    }

    handleCheckboxChange = clicked =>
        this.setState({ checked: clicked.target.true });

    render() {
        return (
            <div>
                <h2>Shopping List</h2>
                <ul>
                    {this.props.shopping.map((ingredient) => {
                        return (
                            <li key={ingredient}>
                                
                                <p className="ingredient">
                                    {ingredient}
                                </p>
                                <a href="#" onClick={(e)=>{this.props.remove(ingredient)}}>remove</a>

                            </li>
                        );
                    })}
                </ul>

                <button id="clear-shopping-list" onClick={(e) => {
                    this.props.clearAll();
                }}>
                    Clear All
                </button>
            </div>
        );
    }
}

export default ShoppingList;
