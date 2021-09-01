import React from 'react';
import MovieCard from './MovieCard';
import Filter from './Filter(title,rate)';

class MovieList  extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        title: "",
        description: "",
        posterURL: "",
        rating: "",
        filter:"",
        trailer_link:"",
        movies: []
      }
    }
  
    updateTitle(event) {
      this.setState({
        title: event.target.value
      });
    }
    updateDescrip(event) {
      this.setState({
        description: event.target.value
      });
    }
    updateRating(event) {
      this.setState({
        rating: event.target.value
      });
    }
    updateposterURL(event) {
      this.setState({
        posterURL: event.target.value
      });
    }
    updateFilter(event) {
      this.setState({
        filter: event.target.value
      });
    }
    updateTrailer(event) {
      this.setState({
        trailer_link: event.target.value
      });
    }
  
    handleClick() {
      const movie = {
        title: this.state.title,
        description: this.state.description,
        posterURL: this.state.posterURL,
        rating : this.state.rating,
        trailer_link: this.state.trailer_link
      };
      var movies = this.state.movies;
      movies.push(movie);
      this.setState({
        movies: movies,
        title: "",
        description: "",
        posterURL: "",
        rating: "",
        trailer_link:""
      });
    }

    filterClick()
    {
      let filter = this.state.filter;
      let movies = this.state.movies;
      for (let movie of movies) {
          if(movie.title === filter || movie.rating === filter)
          {
            alert( filter + " is found. ");       
          } 
      }
    }
  
    handleItemChanged(i, event) {
      var movies = this.state.movies;
      movies[i]  = event.target.value;
      this.setState({
        movies: movies
      });
    }
  
    renderRows() {
      return  this.state.movies.map(function(movie, i) {
                return (
                  <tr key={"item-" + i}>
                    <td>
                <MovieCard tableau={movie.movies} title={movie.title} desc={movie.description}  rating={movie.rating} posterURL={movie.posterURL} trailer={movie.trailer_link}></MovieCard>
                    </td>
                  </tr>
                );
              });
    }
  
    
    render() {
      return (
        <div>
          <br/>
          <center>
          <table className="">
            <input
            type="text"
            value={this.state.title}
            onChange={this.updateTitle.bind(this)}
            placeholder="title"
          />
           <input
            type="text"
            value={this.state.description}
            onChange={this.updateDescrip.bind(this)}
            placeholder="description"
          />
           <input
            type="text"
            value={this.state.rating}
            onChange={this.updateRating.bind(this)}
            placeholder="rating"
          />
           <input
            type="text"
            value={this.state.posterURL}
            onChange={this.updateposterURL.bind(this)}
            placeholder="poster URL"
          />
           <input
            type="text"
            value={this.state.trailer_link}
            onChange={this.updateTrailer.bind(this)}
            placeholder="trailer link"
          />
          <button
            onClick={this.handleClick.bind(this)}
          >
            Add 
          </button>
          <hr />
          <br/><br/> 

          <Filter change={this.updateFilter.bind(this)} bouton={this.filterClick.bind(this)}></Filter>
          
          <br/><br/><br/><br/>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
          <br/>
          </center>
        </div>
      );
    }
  }
  
  export default MovieList;