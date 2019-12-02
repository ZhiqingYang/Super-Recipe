import React from 'react';
import './App.css';
import Categories from './Categories';
import Slideshow from './Slideshow.js';
import SearchBar from './SearchBar'
import chef from './chef.svg'
var recipeSearchAppId = "9a38d544";
var recipeSearchAppKey = "2a69c4453a2b9bb2e8e8658454f837f4";
var appid = "9a38d544"
var apiKey = "2a69c4453a2b9bb2e8e8658454f837f4";
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        json:{},
        check:0
      };
    }
    makeApiRequest = (query) => {
      var url = "https://api.edamam.com/search?q="+query+"&app_id="+appid+"&app_key="+apiKey+"&from=0&to=3";
      var fetchPromise = fetch(url);
      fetchPromise.then((response) => {
        response.json().then((data) => {
            if (response.status === 200) {
                this.setState({
                    json : data,
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
            <div>
                <div className="App">
                    <h1>Super Recipe</h1>
                </div>
                 <div>
                  <img display="inline-block"src={chef} height="50px" weight="50px" className="chef" alt="chef-logo"
                  onClick={()=>{
                    this.setState({
                  check : 0
                  })
        }}/>
        <SearchBar 
        placeholderText="chicken"
        onSubmit = {(query) => {
          this.makeApiRequest(query);
        }}/>
        <p>{this.state.check}</p>
        {console.log(this.state.json)}
      </div>
                <Slideshow/> 
                <div>
                    <Categories
                        onCategoryClicked={(query) => {
                            console.log("category clicked", query);
                            this.makeApiRequestCategory(query);
                        }}
                    />
                </div>
            </div>
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