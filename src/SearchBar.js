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


            <form id = "search-form"
                onSubmit = {(e) => {
                    e.preventDefault();
                    this.props.onSubmit(this.state.input);
                }}
            >
                <div>
                    <input
                        className = "form-control"
                        type="text"
                        placeholder={this.props.placeholderText}
                        onChange={(e) => {
                            var value = e.target.value;
                            this.setState({
                                input: value
                            });
                        }}
                    />
                    <button className="btn btn-primary" type="submit">Search</button>
                </div>

            </form>

        );

    }
}
export default SearchBar;
