import React from 'react';
import './App.css';
import SearchHistory from './SearchHistory';
import Categories from './Categories';
import shopping from './shopping-cart.svg';
import Slideshow from './Slideshow';
import SearchBar from './SearchBar';
import chef from './chef.svg';
import ShoppingList from './ShoppingList';
import Recipe from './Recipe';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

var recipeSearchAppId = "6cd02485";
var recipeSearchAppKey = "c3b84ef36f4a78721bdf2ecc191bde3a";
var appid = "6cd02485";
var apiKey = "c3b84ef36f4a78721bdf2ecc191bde3a";

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


    // componentDidMount() {
    //     console.log("MOUNTED");
    //     var localHistory = localStorage.getItem("weather-queries");
    //     console.log(localHistory);
    //     var queries = JSON.parse(localHistory) || [];
    //     // this.loadSavedQueries(this.savedLocations);
    //     console.log(queries[0]);
    //     this.setState({
    //         savedLocations: queries
    //     });
    // }

    SaveQuery = (query) => {
        var recentSavedHistory = this.state.savedSearches.concat[query];
        this.setState({
            savedSearches: recentSavedHistory
        }, () => {
            localStorage.setItem("search-history", JSON.stringify(this.state.savedSearches));
        });
    }


    makeApiRequest = (query) => {
        var url = "https://api.edamam.com/search?q=" + query + "&app_id=" + appid + "&app_key=" + apiKey + "&from=0&to=3";
        var fetchPromise = fetch(url);
        fetchPromise.then((response) => {
            console.log("debug");
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

                        <Link to="/shoppinglist"><img display="inline-block" src={shopping} height="50px" weight="50px" className="cart" alt="cart" /></Link>
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
                    <div>
                        {this.state.savedSearches.length > 0 && (
                            <SearchHistory
                                searchHistory={this.state.searchHistory}
                                onSearchHistoryClicked={(search) => {
                                // this.makeRecipeQuery(search);
                                }}
                            />
                        )}
                    </div>
                    <div>
                        <Categories
                            onCategoryClicked={(query) => {
                                console.log("category clicked", query);
                                this.makeApiRequestCategory(query);
                            }}
                        />
                    </div>
                    {this.state.check === 1 && (<Recipe data={this.state.json.hits[0]} />)}
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
}

export default App;
