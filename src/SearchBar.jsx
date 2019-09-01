import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        //props ==> search
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    };

    handleSubmit(e) {
        e.preventDefault()
        this.props.handleSearch(this.state.value)
        this.setState({
            value: ''
        })
    };
   
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder={"Search reviews"}
                />
                <input type="submit" />
            </form>
        );
    }

}

export default SearchBar
SearchBar.propTypes = {
    search: PropTypes.array
}