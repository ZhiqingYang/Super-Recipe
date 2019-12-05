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
import Result from './Result';
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
            savedSearches: 0, // this.load()
            shoppingItems:0,
            recipe:0
        };
    }
    // load = () => {
    //     var localHistory = localStorage.getItem("viewHistory");
    //     console.log("history", localHistory);
    //     var queries = JSON.parse(localHistory) || [];
    //     console.log(queries[0]);
    //     // this.setState({
    //     //     savedSearches: queries
    //     // }, () => {
    //     //     console.log("Data TEST", this.savedSearches);
    //     // });
    //     return (queries);
    // }
    componentDidMount() {
        console.log("MOUNTED");
        var localHistory = localStorage.getItem("viewHistory");
        console.log(localHistory);
        var queries = JSON.parse(localHistory) || [];
        // this.loadSavedQueries(this.savedLocations);
        console.log(queries[0]);
        this.setState({
            savedSearches: queries
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

    loadSearchHistory = () => {
        console.log("MOUNTED");
        var localHistory = localStorage.getItem("viewHistory");
        console.log(localHistory);
        var queries = JSON.parse(localHistory) || [];
        // this.loadSavedQueries(this.savedLocations);
        console.log(queries[0]);
        if (queries.length > 5) {
            queries.shift();
        }
        this.setState({
            savedSearches: queries
        });
    }

    loadShoppingList = () => {
        console.log("THIS");
        var shoppingJson = localStorage.getItem("shopping");
        console.log('JSONNNNNNNNNNNNNNN', shoppingJson);
        var shoppingListParsed = JSON.parse(shoppingJson) || [];
        console.log(shoppingListParsed[0]);
        console.log('PARSEDDDDDDDD', shoppingListParsed);
        this.setState({
            shoppingItems: shoppingListParsed
        });
    }

    makeApiRequest = (query) => {
        var url = "https://api.edamam.com/search?q=" + query + "&app_id=" + appid + "&app_key=" + apiKey + "&from=0&to=16";
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
        if (this.state.savedSearches === 0){
            this.loadSearchHistory();
        }
        if (this.state.shoppingItems === 0){
            this.loadShoppingList();
        }

        return (

            <Router>
                <div>

                    <div className="App">
                        <Link to="/"><h1>Super Recipe</h1></Link>
                    </div>
                    <div>
                        <Link to="/"><img display="inline-block" src={chef} height="50px" weight="50px" className="chef" alt="chef logo"
                            onClick={() => {
                                this.setState({
                                    check: 0
                                });
                            }} />
                        </Link>

                        <SearchBar
                            placeholderText="chicken"
                            onSubmit={(query) => {
                                this.makeApiRequest(query);
                            }} />
                        <Link to="/shoppinglist"><img className="shop" display="inline-block" src={shopping} height="50px" weight="50px" className="cart" alt="cart" /></Link>
                        <p>{this.state.check}</p>
                        {console.log(this.state.json)}
                        {this.state.check === 0 &&(
                        <Switch>
                            <Route exact={true} path="/">
                                <Slideshow />
                                <div>
                                    <Categories
                                        onCategoryClicked={(query) => {
                                            console.log("category clicked", query);
                                            this.makeApiRequestCategory(query);
                                        }}
                                    />
                                </div>
                                <div>
                                    {console.log("HERRRREEE", this.state.savedSearches)};
                                    {this.state.savedSearches.length > 0 && (
                                        <SearchHistory
                                            searchHistory={this.state.savedSearches}
                                            onClick={this.resultOnClick}
                                        />
                                    )}
                                </div>
                            </Route>
                        </Switch> 
                        )}
                        
                    </div>


                    {this.state.check === 1 && (<Result data={this.state.json} onClick={this.resultOnClick} />)}
                    {this.state.check === 3 && (<Recipe data={this.state.recipe} history={this.loadSearchHistory} shopping={this.loadShoppingList}/>)}
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

    resultOnClick = (data) => {
        this.setState({
            check: 3,
            recipe: data
        })
    }
}

export default App;
