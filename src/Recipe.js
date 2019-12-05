import React from 'react';


var appid = "d4581afa";
var apiKey = "b540a13044c283283227318f791ce2c5";

class Recipe extends React.Component {
    constructor(props) {
        super(props);

            this.state = {
                recipeData: {},
                key:[],
                check: 0,


        };
    }


    //Get the nutrition api result in Post method.
    makeApiRequest = () => {

        var jsonDict ={
            "title": this.props.data.label,
            "ingr": this.props.data.recipe.ingredientLines
        }
        var url = "https://api.edamam.com/api/nutrition-details?app_id=" + appid + "&app_key=" + apiKey;
        var promise = fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonDict)
        })
        promise.then((response) => {
            response.json().then((data) =>{
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
            })
        })
    }

    render = () =>{
        return(

            <div>
                {/* debug */}
                {/* {console.log("label", this.state.recipeData.totalNutrients)}
                {console.log("1")} */}

                {/* Get nutrition result */}
                {this.state.check===0 && this.makeApiRequest()}
                {/* Large Image */}
                <img src={this.props.data.recipe.image}/>
                {/* Title */}
                <h2>{this.props.data.recipe.label}</h2>
                {/* Time and Yield */}
                <div>
                    <p>Time: {this.props.data.recipe.totalTime} mins</p>
                    <p>Yield: {this.props.data.recipe.yield} serving</p>
                </div>
                
                {/* Ingredients List with Add button */}
                <div>
                <p>Ingredients</p>
                {this.props.data.recipe.ingredientLines.map((content)=>{
                    var result ="";
                    return(
                    <li key={content}>{content} <a href="#" onClick={(e)=>{this.saveLocal("shopping",content)}}>add</a></li> 
                    )
                })}
                {/* Add all button */}
                <button onClick={(e)=>{
                    this.props.data.recipe.ingredientLines.map((content)=>{this.saveLocal("shopping",content);});
                    }
                    }>
                    Add all in one click
                </button>
                
                {/* Instruction button */}
                <a href={this.props.data.recipe.url}>
                    <button>Instruction</button>
                </a>
                
                {/* nutrition */}
                {this.state.key.map((content)=>{
                    var table = this.state.recipeData.totalNutrients[content]
                    return(
                    <li key={content}>
                    {table.label} quantity:{table.quantity}{table.unit} 
                    {/* {this.state.json.totalNutrients.content.quantity}
                    {this.state.json.totalNutrients.content.unit} */}
                    </li>
                    )
                })}

                {/* Save viewHistory data and ingredients data to local storage */}
                {this.saveLocal("viewHistory",this.props.data)}
            </div>
        </div>



        )
    }


    // Save data to local storage according to the key and value
    //check if duplicate and do not allow it 
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
        
        // !pValue.includes(value)
        if (JSON.stringify(pValue).indexOf(JSON.stringify(value))===-1) {
            newValue = pValue.concat([value]);
        }

        // var queriesJson = JSON.stringify(newSavedLocations);
        var save = JSON.stringify(newValue);
        localStorage.setItem(key, save); // update local storage
    }

}

export default Recipe;