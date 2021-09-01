import React from 'react';


function  SearchMovie ({changeruserInput }){

  
    return (
        <section className="mouvieSearch">
  <input 
   placeholder="What Are You Looking For ..."
   className="searchbox"
    onChange={changeruserInput}/>
        </section>
   )
  
}
export default SearchMovie ;
