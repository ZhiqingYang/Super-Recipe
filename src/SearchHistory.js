/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Recipe from './Recipe';

// import bootstrap
class SearchHistory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stage: 0
        };
    }
    render = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Recipe Search History</h2>
                        <ul className="history-list">
                            {this.props.searchHistory.map((search) => {
                                return (
                                    <li key={search.recipe.label}>
                                        <p className="history-labels">{search.recipe.label}</p>
                                        <a id="searchName" href="#" onClick={(e) => {
                                            e.preventDefault();
                                            // this.props.onSearchHistoryClicked(search);
                                            <Recipe data={this.state.stage} />
                                        }}>
                                            <img className="history-images" src={search.recipe.image} alt="recipe search" />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchHistory;
