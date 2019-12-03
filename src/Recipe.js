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

                </div>
                <p>Time: {this.props.data.recipe.totalTime}</p>
                {/* <p>Yield: {this.props.data.recipe.yield}</p> */}
                {this.props.data.recipe.ingredientLine.map((content)=>{
                    return(
                        <li>{content}</li>
                    )
                })}
                
            </div>
            
        )
    }
}

export default Recipe;