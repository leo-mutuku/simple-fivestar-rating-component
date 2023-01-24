import { FaStar } from "react-icons/fa";
function Star({ filled,hovered, onClick,onMouseEnter, onMouseLeave }) {

  return (
    <FaStar 
     color={filled ? "green" : "lightgray" 
     && hovered ? "green": "lightgray"} 
     onClick={onClick} 
     onMouseEnter={onMouseEnter}
     onMouseLeave={onMouseLeave}/>
  );
}
export default Star;