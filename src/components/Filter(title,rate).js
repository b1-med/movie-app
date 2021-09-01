import React from 'react';

function Filter(props) {
   return (
       <div style = {{borderStyle: "outset"}}>
           <center><h1>Filter</h1>
           <input
            type="text"
            onChange={props.change}
            placeholder="add the filter desired"
          />
          <button
            onClick={props.bouton}
          >
            click to filter
          </button></center> 
          <br/>  <br/>
       </div>
   );
  }
  
export default Filter;