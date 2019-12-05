/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// import bootstrap
class SearchHistory extends React.Component {
    render = () => {
        return (
            <div className="history-list">
                <h2 id="history-title">Recipe Search History</h2>

                {this.props.searchHistory.map((search) => {
                    return (
                        <ul className="list-group-flush">
                            <li className="list-group-item" key={search.recipe.label}>

                                <a id="searchName" href="/#" onClick={(e) => {
                                    e.preventDefault();
                                    this.props.onClick(search);
                                }}>
                                    <img className="history-images" src={search.recipe.image} alt="recipe search" />
                                    <p className="history-labels">{search.recipe.label}</p>
                                </a>
                            </li>
                        </ul>
                    );
                })}

            </div>
        );
    }
}

export default SearchHistory;
