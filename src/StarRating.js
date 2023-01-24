import { useState } from "react";
import Star from "./Star";
function StarRating() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0)
  return (
    <span>
      {Array(5)
        .fill()
        .map((_, index) => (
          <Star 
           key={index} 
           filled={index < rating} 
           hovered ={index < hoveredRating}
           onClick={() => setRating(index + 1)} 
           onMouseEnter={()=>setHoveredRating(index+1)}
           onMouseLeave={()=>setHoveredRating(index)}
           />
        ))}
    </span>
  );
}
export default StarRating;