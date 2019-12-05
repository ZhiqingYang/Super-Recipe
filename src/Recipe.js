import React from 'react';


var appid = "d4581afa";
var apiKey = "b540a13044c283283227318f791ce2c5";

class Recipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipeData: {},
            key: [],
            check: 0


        };
    }


    // Get the nutrition api result in Post method.
    makeApiRequest = () => {

        var jsonDict = {
            "title": this.props.data.label,
            "ingr": this.props.data.recipe.ingredientLines
        };
        var url = "https://api.edamam.com/api/nutrition-details?app_id=" + appid + "&app_key=" + apiKey;
        var promise = fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonDict)
        });
        promise.then((response) => {
            response.json().then((data) => {
                if (response.status === 200) {
                    this.setState({
                        recipeData: data,
                        check: 1,
                        key: Object.keys(data.totalNutrients)
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
                {/* Get nutrition result */}
                {this.state.check === 0 && this.makeApiRequest()}
                {/* Large Image */}
                <img className="centerImage" src={this.props.data.recipe.image} alt="recipe" />
                {/* Title */}
                <h2 className="recipe-name"> {this.props.data.recipe.label}</h2>

                <div className="contaniner">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            {/* Time and Yield */}
                            <div className="recipe-first">
                                <p>Time: {this.props.data.recipe.totalTime} mins</p>
                                <p>Yield: {this.props.data.recipe.yield} serving</p>
                            </div>


                            {/* Instruction button */}
                            <a href={this.props.data.recipe.url}>
                                <button type="button" className="btn btn-primary btn-lg instruction"> Instruction</button>
                            </a>


                            {/* Ingredients List with Add button */}

                            <div className="ingredients">
                                <h3>Ingredients</h3>
                                {this.props.data.recipe.ingredientLines.map((content) => {
                                    var result = "";
                                    return (
                                        <ul className="list-group-flush">
                                            <li key={content} className="list-group list-group-item">

                                                {content}
                                                <a href="/#" onClick={(e) => { this.saveLocal("shopping", content); }}>  add</a></li>
                                        </ul>

                                    );
                                })}
                                {/* Add all button */}
                                <button type="button" className="btn btn-success btn-sm center"
                                    onClick={(e) => {
                                        this.props.data.recipe.ingredientLines.map((content) => { this.saveLocal("shopping", content); });
                                    }
                                    }>
                            Add all in one click
                                </button>

                            </div>


                        </div>

                        <div className="col-md-6 col-12">
                            {/* nutrition */}
                            <div className="nutrition">
                                <h3>Nutrition Analysis</h3>
                                {this.state.key.map((content) => {
                                    var table = this.state.recipeData.totalNutrients[content];
                                    return (
                                        <ul className="list-group-flush">
                                            <li key={content} className="list-group list-group-item">
                                                {table.label} : {table.quantity}{table.unit}
                                                {/* {this.state.json.totalNutrients.content.quantity}
    {this.state.json.totalNutrients.content.unit} */}
                                            </li>
                                        </ul>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                </div>


                {/* Save viewHistory data and ingredients data to local storage */}
                {this.saveLocal("viewHistory", this.props.data)}


            </div>


        );
    }


    // Save data to local storage according to the key and value
    // check if duplicate and do not allow it
    saveLocal = (key, value) => {
        // try {
        //     var pSearches = localStorage.getItem(key)
        //     // If there are no saved queries, queriesJson will be null.
        //     // Provide a fallback to an empty array using the || syntax.
        //     return JSON.parse(queriesJson) || [];
        // } catch (e) {
        //     return [];
        // }
        var temp = JSON.stringify([]);
        var pSearches = localStorage.getItem(key) || temp;
        var pValue = JSON.parse(pSearches);
        console.log("get", pValue);
        var newValue = pValue;

        if (JSON.stringify(pValue).indexOf(JSON.stringify(value))===-1) {
            newValue = pValue.concat([value]);

        }

        // var queriesJson = JSON.stringify(newSavedLocations);
        var save = JSON.stringify(newValue);
        localStorage.setItem(key, save); // update local storage
    }

}

export default Recipe;
