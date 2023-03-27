
import { useState } from "react";

const Card = ({id,image,info,price,name,removeTour}) => {
const[readmore,setReadmore]=useState(false);

const description=readmore ? info:`${info.substring(0,200)}....`;

function readmoreHandler(){
  setReadmore(!readmore);
}
  return (
    <div className="card">
      <img className='image' src={image} ></img>
      <div>
          <div>
            <h4 className="tour-price" >${price}</h4>
            <h4 className="tour-name">{name} </h4>
          </div>
          <div>
            {description}
            <span className="read-more" onClick={readmoreHandler} >
              {readmore ? `Show less`:`Read more`}
            </span>
          </div>
      </div>
      <button className="btn-red" onClick={()=> removeTour(id)} >Not interested</button>
    </div>
  )
}

export default Card;
