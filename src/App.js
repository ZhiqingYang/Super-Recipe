import React from 'react';
import logo from './logo.svg';
import SearchBar from './SearchBar'
import chef from './chef.svg'
import './App.css';
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
  //"https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"
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
  render = () =>{
  
    return (
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
        
    );
  }
  
}


export default App;
