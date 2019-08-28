import React, {Component} from 'react';

function ReviewListItem(props) {
    return (
        <li>
            id: {props.id}
            name: {props.first_name}
            profile_picture: {props.profile_picture}
            date: {props.localized_date}
            review: {props.review}
            response_first_name: {props.response_first_name}
            response_profile_picture: {props.response_profile_picture}
            response_comment: {props.response_comment}
            response_localized_date: {props.response_localized_date}
        </li>
    )
}

export default ReviewListItem