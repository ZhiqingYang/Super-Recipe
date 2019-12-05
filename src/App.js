import React from 'react';
import './App.css';
import SearchHistory from './SearchHistory';
import Categories from './Categories';
import Slideshow from './Slideshow';
import SearchBar from './SearchBar';
import chef from './chef.svg';
import ShoppingList from './ShoppingList';
<<<<<<< HEAD

=======
import Recipe from './Recipe';
import Result from './Result';
>>>>>>> 6d74a0980c8057c26f286703e9eaf3f3f15c49a9
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


var recipeSearchAppId = "9a38d544";
var recipeSearchAppKey = "2a69c4453a2b9bb2e8e8658454f837f4";
var appid = "9a38d544";
var apiKey = "2a69c4453a2b9bb2e8e8658454f837f4";
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            json: {},
            check: 0,
            searchName: "",
            savedSearches: []
        };
    }


    componentDidMount() {
        console.log("MOUNTED");
        var localHistory = localStorage.getItem("viewHistory");
        console.log(localHistory);
        var queries = JSON.parse(localHistory) || [];
        console.log(queries[0]);
        this.setState({
            savedSearches: queries
        }, () => {
            console.log(this.savedSearches);
        });
    }

    // SaveQuery = (query) => {
    //     var recentSavedHistory = this.state.savedSearches.concat[ query ];
    //     if (recentSavedHistory.length > 5) {
    //         recentSavedHistory.shift();
    //     }
    //     this.setState({
    //         savedSearches: recentSavedHistory
    //     }, () => {
    //         localStorage.setItem("search-history", JSON.stringify(this.state.savedSearches));
    //     });
    // }


    makeApiRequest = (query) => {
        var url = "https://api.edamam.com/search?q=" + query + "&app_id=" + appid + "&app_key=" + apiKey + "&from=0&to=3";
        var fetchPromise = fetch(url);
        fetchPromise.then((response) => {
            response.json().then((data) => {
                if (response.status === 200) {
                    this.setState({
                        json: data,
                        check: 1
                    });
                } else {
                    this.setState({
                        check: 0
                    });
                }
            });
        });

    }

    render = () => {


        return (

            <Router>
                <div>
                    <div className="App">
                        <h1>Super Recipe</h1>
                    </div>
                    <div>
                        <img display="inline-block" src={chef} height="50px" weight="50px" className="chef" alt="chef logo"
                            onClick={() => {
                                this.setState({
                                    check: 0
                                });
                            }} />
                        <Link to="/shoppinglist">Shopping List</Link>
                        <Switch>
                            <Route path="/shoppinglist">
                                <ShoppingList ShoppingList={[]} />
                            </Route>
                        </Switch>

                        <SearchBar
                            placeholderText="chicken"
                            onSubmit={(query) => {
                                this.makeApiRequest(query);
                            }} />
                        <p>{this.state.check}</p>
                        {console.log(this.state.json)}
                    </div>
                    <Slideshow />
                    {/* <div>
                        {this.state.savedSearches.length > 0 && (
                            <SearchHistory

                                searchHistory={this.state.searchHistory}
                                onSearchHistoryClicked={() => {

                                }}
                            />
                        )}
                    </div> */}
                    <div>
                        <Categories
                            onCategoryClicked={(query) => {
                                console.log("category clicked", query);
                                this.makeApiRequestCategory(query);
                            }}
                        />
                    </div>
<<<<<<< HEAD
=======
                    {this.state.check === 1 && (<Result data={this.state.json}/>)}
                    {this.state.check === 5 && (<Recipe data={this.state.json.hits[0]} />)}
>>>>>>> 6d74a0980c8057c26f286703e9eaf3f3f15c49a9
                </div>
            </Router>

        );
    }

    makeApiRequestCategory = (query) => {
        var categoryApiUrl = "https://api.edamam.com/search?q=&app_id=" + recipeSearchAppId + "&app_key=" + recipeSearchAppKey + "&diet=" + query;
        console.log(categoryApiUrl);

        var fetchPromise = fetch(categoryApiUrl);
        fetchPromise.then((response) => {
            console.log('response', response);

            response.json().then((data) => {
                console.log(data);
                if (response.status === 200) {
                    this.setState({
                        recipeCountFrom: data.from,
                        recipeCountTo: data.to
                    }, () => {
                        console.log(this.state.recipeCountFrom, this.state.recipeCountTo);
                    });
                    this.setState({
                        recipeSelected: Math.round(Math.random() * (this.state.recipeCountTo - this.state.recipeCountFrom) + this.state.recipeCountFrom, 0)
                    }, () => {
                        console.log(this.state.recipeSelected);
                        // make api request to pull up result
                    });
                } else {
                    console.error('error', data);
                }
            });
        });
    }
}

export default App;
