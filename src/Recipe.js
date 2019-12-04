import React from 'react';

class Recipe extends React.Component {
    constructor(props) {
        super(props);

            this.state = {
        
        }
    }
    render = () =>{
        var i = 0;
        console.log("props",this.props.data);

        return(
            <div>
                <img src={this.props.data.recipe.image}/>
                <h2>{this.props.data.recipe.label}</h2>
                <div>
                    <p>Time: {this.props.data.recipe.totalTime} mins</p>
                    <p>Yield: {this.props.data.recipe.yield} serving</p>
                </div>
                <div>
                <p>Ingredients</p>
                {this.props.data.recipe.ingredientLines.map((content)=>{
                    return(
                    <li key={content}>{content}</li>
                    )
                })}
                </div>
                <a href={this.props.data.recipe.url}>
                    <button>Instruction</button>
                </a>
                
                
            </div>
            
        )
    }
}

export default Recipe;