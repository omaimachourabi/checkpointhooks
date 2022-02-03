import React from 'react';
import StarRatingComponent from 'react-star-rating-component';


const Search = ({ searchh, setRate, newRate }) => {
    const onStarClick = (nextValue) => {
        setRate(nextValue);
    }
    return (
        <div>
            <input type="text" placeholder="search a movie" onChange={(e) => searchh(e.target.value)} />
            <StarRatingComponent
                name="rate1"
                starCount={5}
                value={newRate}
                onStarClick={onStarClick}
            />
            



        </div>
    )
}

export default Search;

