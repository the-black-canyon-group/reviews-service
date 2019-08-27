import React from 'react';
import axios from 'axios';
import _ from 'underscore';

class ReviewList extends React.Component {
    constructor(props) {
        super(props)
        this.setState = {
            reviews: [],
            reviewsWithResponses: []
        }
    }
    componentDidMount() {
        axios.get('/reviews') 
            .then((reviews) => {
                //IF REVIEW DOES NOT HAVE RESPONSE KEYS 
                reviews.map((review) => {
                    if (review.response_first_name === undefined) {
                        this.setState({
                            reviews: reviews.push(review)
                        })
                    } else {
                        this.setState({reviewsWithResponses: reviews.push(review) })
                    }
                })
                
            })
            .catch((err) => {
                console.log(err)
            });
    }
        
    render() {
        <ul>{
            //MAP ALL REVIEWS W/O RESPONSES
            _.map(this.state.reviews, ({first_name,
            profile_picture,
            localized_date,
            review,
            accuracy,
            communication,
            cleanliness,
            location,
            checkin,
            value}) => {
                <li key={id}>
                    First Name: {first_name} 
                    Last Name: {last_name} 
                    Profile_picture: {profile_picture}
                    Date: {localized_date}
                    Review: {review}
                    Accuracy: {accuracy}
                    Communication: {communication}
                    Cleanliness: {cleanliness}
                    Location: {location}
                    Checkin: {checkin}
                    Value: {value}
                </li>

                _.map(this.state.reviewsWithResponses, ({first_name,
                    profile_picture,
                    localized_date,
                    review,
                    accuracy,
                    communication,
                    cleanliness,
                    location,
                    checkin,
                    value,
                    response_first_name,
                    response_profile_picture,
                    response_comment,
                    response_localized_date
                }) => {
                    <li key={id}>
                        First Name: {first_name}
                        Last Name: {last_name}
                        Profile_picture: {profile_picture}
                        Date: {localized_date}
                        Review: {review}
                        Accuracy: {accuracy}
                        Communication: {communication}
                        Cleanliness: {cleanliness}
                        Location: {location}
                        Checkin: {checkin}
                        Value: {value}
                        Response_first_name: {response_first_name}
                        Response_profile_picture: {response_profile_picture}
                        Response_comment: {response_comment}
                        Response_localized_date: {response_localized_date}
                    </li>
                })
            })
        }</ul>
       
    }
}

export default ReviewList;