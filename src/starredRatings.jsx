import React from 'react';
import _ from 'underscore';
import PropTypes from 'prop-types';



class StarredRatings extends React.Component{
    constructor(props) {
        super(props) 
    }

  

    //AVGERAGE RATINGS: ONE RATING ==> MAP FOR TOTAL
    avgTotalRating() {
        let total = 0
        this.props.starred_reviews.map((review) => {
            total += review.accuracy
            total += review.checkin
            total += review.cleanliness
            total += review.communication
            total += review.location
            total += review.value
        })
        // return Math.round(total /(this.starred_reviews.length))
        return <div>{Math.round(total /(this.props.starred_reviews.length))}</div> 
    }
    
    
    //ACCURACY
    avgAccuracyRating() {
        let total = 0
        this.props.starred_reviews.map((review) => {
            total += review.accuracy
        })
        return <div>{Math.round(total / (this.props.starred_reviews.length))}</div>  
    }
    //CHECKIN
    avgCheckinRating() {
        let total = 0
        this.props.starred_reviews.map((review) => {
            total += review.checkin
        })
        return <div>{Math.round(total / (this.props.starred_reviews.length))}</div>
        
    }
    
    //CLEANLINESS
    avgCleanlinessRating() {
        let total = 0
        this.props.starred_reviews.map((review) => {
            total += review.cleanliness
        })
        return <div>{Math.round(total/(this.props.starred_reviews.length))}</div> 
    }
    
    //COMMUNICATION
    avgCommunicationRating() {
        let total = 0
        this.props.starred_reviews.map((review) => {
            total += review.communication
        })
        return <div>{Math.round(total/(this.props.starred_reviews.length))}</div>
    }
    
    //LOCATION
    avgLocationRating() {
        let total = 0
        this.props.starred_reviews.map((review) => {
            total += review.location
        })
        return <div>{Math.round(total/(this.props.starred_reviews.length))}</div> 
    }
    
    //VALUE
    avgValueRating() {
        let total = 0
        this.props.starred_reviews.map((review) => {
            total += review.value
        })
        return <div>{Math.round(total/(this.props.starred_reviews.length))}</div> 
    }

    render()  {
        return(
            <div>
                <div id="totalReviews">{this.props.starred_reviews.length} Reviews</div>
                {/* AVGTOTALRATING */}
                <div id="avgTotalRatings"></div>
                <div id="avgAccuracyRatings">ACCURACY:</div>
                <div id="avgCheckInRatings">CHECKIN:</div>
                <div id="avgCleanlinessRatings">CLEANLINESS:</div>
                <div id="avgCommunicationRatings">COMMUNICATION:</div>
                <div id="avgLocationRatings">LOCATION:</div>
                <div id="avgValueRatings">VALUE:</div>
            </div>
            
        )
    }

}

export default StarredRatings
StarredRatings.propTypes = {
    starred_reviews: PropTypes.array
}



