import React from 'react';
import DescripTrailer from './DescripTrailer';
import { Link, Route } from 'react-router-dom';

function MovieCard(props) {
  let descrip = props.desc;
  let trailer = props.trailer;
    return (
      <div style = {{borderStyle: "groove"}}>
          <h4>Title: {props.title} <br/> Rating: {props.rating} <br/> PosterURL: {props.posterURL}</h4>
            <Link to="/descripTrailer">
              Description and Trailer
            </Link><br/>
            <Link to="/">
              The movie
            </Link>  <br/> <br/> <br/>
            <Route path="/" />
            <Route path="/descripTrailer" render={(props) => <DescripTrailer {...props} desc={descrip} trailer={trailer}/>}/>
       </div>
    ); 
  }
 

  export default MovieCard;