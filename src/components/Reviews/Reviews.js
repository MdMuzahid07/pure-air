import { useEffect, useState } from 'react';
import './Reviews.css'

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('productReviews.json')
        .then(response => response.json())
        .then(data => setReviews(data))
    }, []);


    return (
        <div className='review-container'>
           {
               reviews.map((review) => <div>
                    <div className='review-card'>
                        <img src= {review.picture} alt="" />
                        <span>
                            <h1>Name: {review.name}</h1>
                            <h3>Ratting: 4/5 ster</h3>
                        </span>
                    </div>
               </div>)
           }
        </div>
    );
};

export default Reviews;