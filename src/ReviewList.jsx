import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewListItem from './ReviewListItem.jsx';
import _ from 'underscore';


const ReviewList = (props) => {
    return (
        <ul>
            {props.reviews.map((review) => {
                return (
                    <ReviewListItem key={review.id}
                        id={review.id}
                        name={review.first_name}
                        profile_picture={review.profile_picture}
                        date={review.localized_date}
                        review={review.review}
                        response_first_name={review.response_first_name}
                        response_profile_picture={review.response_profile_picture}
                        response_comment={review.response_comment}
                        response_localized_date={review.response_localized_date}
                    />
                )
            })}
        </ul>
    );
}

export default ReviewList;
ReviewList.propTypes = {
    reviews: PropTypes.func
}