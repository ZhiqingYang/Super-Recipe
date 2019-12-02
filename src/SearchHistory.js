import React from 'react';
// import bootstrap
class SearchHistory extends React.Component {
    render = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Recipe Search History</h2>
                        <ul>
                            {this.props.SearchHistory.map((search) => {
                                return (
                                    <li key={ search }>
                                        <a id="searchName" href="#" onClick={(e) => {
                                            e.preventDefault();
                                            this.props.onSearchHistoryClicked(search);
                                        }}>
                                            { search }
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}