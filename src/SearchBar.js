import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            filter: [],
            clickCount: 0

        };
    }
    render = () => {
        return (
            <div>
                <form display="inline-block"
                    onSubmit = {(e) => {
                        e.preventDefault();
                        this.props.onSubmit(this.state.input);
                    }}
                >
                    <input
                        type="text"
                        placeholder={this.props.placeholderText}
                        onChange={(e) => {
                            var value = e.target.value;
                            this.setState({
                                input: value
                            });
                        }}
                    />
                    <button type="submit">Search</button>
                </form>
                <button display="inline-block" type="click" onClick ={(e)=>{
                    this.setState((currentState, currentProps) => {
                        // return the Object to "merge" into the state
                        let count = this.state.clickCount;
                        this.setState({
                            clickCount: count + 1
                        }); // increment count
                    });
                }} >Filter</button>
                {this.state.clickCount % 2 === 1 && (<p>Filter show up</p>) }
            </div>
        );

    }
}
export default SearchBar;
