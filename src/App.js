import React from 'react';
import './App.css';
import SearchHistory from './SearchHistory';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchName: "",
      savedSearches: []
    };
  }

  render = () => {
    return (
      <div>
        {this.state.savedSearches.length > 0 && (
          <SearchHistory
            searchHistory={this.state.searchHistory}
            onSearchHistoryClicked={(search) => {
              //this.makeRecipeQuery(search);
            }}
          />
        )}
      </div>
    )
  }
};

export default App;
