import React from 'react';
import PropTypes from 'prop-types';

const NoResults = (props) => <h3>None of our guests have mentioned {props.searchedTerm}</h3>;

export default NoResults;

NoResults.propTypes = {
    searchedTerm: PropTypes.func
}