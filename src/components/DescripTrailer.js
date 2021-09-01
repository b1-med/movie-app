import React from 'react';


function DescripTrailer(props) {
    return (
        <div style = {{borderStyle: "solid"}}>
            <h4>Descrip: {props.desc} <br/> Trailer: {props.trailer}</h4>
            <br/>   
         </div>
      );
  }
  
  export default DescripTrailer;