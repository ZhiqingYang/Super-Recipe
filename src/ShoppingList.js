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
        localStorage.removeItem("shopping");
    }

    // componentDidMount() {
    //     console.log('shopping page mounted');
    //     this.props.readShoppingListInStorage();
    // }

    render() {
        console.log(this.props.shoppingItems);
        return (

            <div>
                <h2>Shopping List</h2>
                <ul>
                    {this.props.shoppingList.map((ingredient) => {
                        return (
                            <li key={ingredient}>
                                {/* <form>
                                    <input type="checkbox" className="ingredient-checkbox" name={ingredient} onChange={(e) => {
                                        console.log(e.target.value);
                                        this.props.onChange(e.target.value);
                                    }} />
                                </form> */}
                                <p className="ingredient">
                                    {ingredient}
                                </p>
                            </li>
                        );
                    })}
                </ul>

                <button id="clear-shopping-list" onClick={(e) => {
                    e.preventDefault();
                    this.removeAll();
                }}>
                    Clear All
                </button>
            </div>
        );

    }

}

export default ShoppingList;
