// InteractiveStarRating.js
import React, { useState } from 'react';


const ReviewStars = ({ onRatingSelected }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0); // Optional, for hover effects

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
                onRatingSelected(ratingValue);
              }}
              style={{ display: 'none' }}
            />
            <span
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
              style={{ cursor: 'pointer', color: ratingValue <= (hover || rating) ? 'yellow' : 'gray' }}
            >★</span>
          </label>
        );
      })}
    </div>
  );
};

export default ReviewStars;
