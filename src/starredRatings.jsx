import React from 'react';
import _ from 'underscore';
import PropTypes from 'prop-types';



class StarredRatings extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            accuracy: 0,
            checkin: 0,
            cleanliness: 0,
            communication: 0,
            location: 0,
            value: 0,
            total: 0
        }
    }
    
    //ACCURACY
    avgAccuracyRating() {
        this.setState({
            accuracy: Math.round(this.state.accuracy / (this.props.starred_reviews.length))
        })
    }

    //CHECKIN
    avgCheckinRating() {
        this.setState({
            checkin: Math.round(this.state.checkin / (this.props.starred_reviews.length))
        })   
    }
    
    //CLEANLINESS
    avgCleanlinessRating() {
        this.setState({
            cleanliness: Math.round(this.state.cleanliness / (this.props.starred_reviews.length))
        })
    }
    
    //COMMUNICATION
    avgCommunicationRating() {
        this.setState({
            communication: Math.round(this.state.communication / (this.props.starred_reviews.length))
        })
    }
    
    //LOCATION
    avgLocationRating() {
        this.setState({
            location: Math.round(this.state.location / (this.props.starred_reviews.length))
        })
    }
    
    //VALUE
    avgValueRating() {
        this.setState({
            value: Math.round(this.state.value / (this.props.starred_reviews.length))
        })
    }

    componentDidMount() {
        this.props.starred_reviews.map((review) => {
            this.setState({
                accuracy: this.state.accuracy += parseInt(review.accuracy),
                checkin: this.state.checkin += parseInt(review.checkin),
                cleanliness: this.state.cleanliness += parseInt(review.cleanliness),
                communication: this.state.communication += parseInt(review.communication),
                location: this.state.location += parseInt(review.location),
                value: this.state.value += parseInt(review.value)
            })
        })
        this.avgAccuracyRating()
        this.avgCheckinRating()
        this.avgCleanlinessRating()
        this.avgCommunicationRating()
        this.avgLocationRating()
        this.avgValueRating()
        //GET TOTAL CATAGORY RATINGS 
        this.setState({ total: this.state.total += (this.state.accuracy + this.state.checkin + this.state.cleanliness + this.state.location + this.state.communication + this.state.value) })
        //SET TOTAL TO AVGERAGE: DIVIDE BY TOTAL
        this.setState({ total: Math.round((this.state.total / (this.props.starred_reviews.length) % 5) + 1.0)  })
        
    }

    render()  {
        return(
            <div>
                <div id="totalReviews">{this.props.starred_reviews.length} Reviews</div>
                <div id="avgTotalRatings">{this.state.total}</div>
                <div id="avgAccuracyRatings">ACCURACY:{this.state.accuracy}</div>
                <div id="avgCheckInRatings">CHECKIN: {this.state.checkin}</div>
                <div id="avgCleanlinessRatings">CLEANLINESS: {this.state.cleanliness}</div>
                <div id="avgCommunicationRatings">COMMUNICATION: {this.state.communication}</div>
                <div id="avgLocationRatings">LOCATION: {this.state.location}</div>
                <div id="avgValueRatings">VALUE: {this.state.value}</div>
            </div>
            
        )
    }

}

export default StarredRatings
StarredRatings.propTypes = {
    starred_reviews: PropTypes.array
}



