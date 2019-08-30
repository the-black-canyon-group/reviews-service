import React, { Component } from 'react'
import SearchField from 'react-search-field';
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
        this.props.search(this.state.value)
        this.setState({
            value: ''
        })
    };
   
    render() {
        return (
            <SearchField
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                placeHolder={"Search reviews"}
            />
        );
    }

}

export default SearchBar
SearchBar.propTypes = {
    search: PropTypes.func
}