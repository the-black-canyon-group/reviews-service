import React, {Component} from 'react';
import axios from 'axios';
import _ from 'underscore';
import ReviewListItem from './ReviewListItem.jsx';

class ReviewList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: []
        }
        this.createReviewItem
    }

    componentDidMount() {
        axios.get('/reviews') 
            .then((reviews) => {
                //IF REVIEW DOES NOT HAVE RESPONSE KEYS
                this.setState({
                    reviews: reviews.data
                })
            })
            .catch((err) => {
                console.log(err)
            });
    }
 
    render() {
        return (
            <ul>
                {this.state.reviews.map((review) => {
                    return(
                        <ReviewListItem key={review.id}
                            name={review.first_name}
                            profile_picture={review.profile_picture}
                            date={review.localized_date}
                            review={review.review}
                            accuracy={review.accuracy}
                            communication={review.communication}
                            cleanliness={review.cleanliness}
                            location={review.location}
                            checkin={review.checkin}
                            value={review.value}
                            response_first_name={review.response_first_name}
                            response_profile_picture={review.response_profile_picture}
                            response_comment={review.response_comment}
                            response_localized_date={review.response_localized_date}
                        />
                    )
                })}         
            </ul>
        )
    }
                        
}

export default ReviewList;