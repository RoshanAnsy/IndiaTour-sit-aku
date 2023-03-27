import React, { useState } from "react";
import data from "./data";
import Cards from "./component/Cards";

const App = () => {
  const[Detail,setDetail]=useState(data);


  function removeTour(id){
  const newTour=Detail.filter((tour)=> tour.id!==id);
  setDetail(newTour);
  }

if(Detail.length===0){
  return(
    <div className="refresh">
      <h2>No tour Left</h2>
      <button className="btn-white" onClick={()=>setDetail(data)}>
        Refresh
      </button>
    </div>
  );
}

  return (
  <div>
<Cards onSet={Detail} removeTour={removeTour} />
  </div>
  )
};

export default App;
