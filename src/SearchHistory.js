/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Recipe from './Recipe';

// import bootstrap
class SearchHistory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchHistory: this.props.SearchHistory
        };
    }

    // loadViewHistory() {
    //             console.log("MOUNTED");
    //     var localHistory = localStorage.getItem("viewHistory");
    //     console.log(localHistory);
    //     var queries = JSON.parse(localHistory) || [];
    //     // this.loadSavedQueries(this.savedLocations);
    //     console.log(queries[0]);
    //     if (queries.length > 5) {
    //         queries.shift();
    //     }
    //     this.setState({
    //         savedSearches: queries
    //     });
    // }

    render = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 id="history-title">Recipe Search History</h2>
                        <ul className="history-list">
                            {this.props.searchHistory.map((search) => {
                                return (
                                    <li key={search.recipe.label}>
                                        <p className="history-labels">{search.recipe.label}</p>
                                        <a id="searchName" href="#" onClick={(e) => {
                                            e.preventDefault();
                                            // this.props.onSearchHistoryClicked(search);
                                            // <Recipe data={this.state.stage} />
    
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
