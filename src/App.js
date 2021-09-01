import React,{useState , useEffect} from
 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import './App.css';
import Search from './components/search';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import MovieCard from './components/MovieCard';

const App = ()=>{
  
  const [movies, setMovies] = useState([
    { title : 'star wars',
      decription :"a good movie" ,
      posterURL: '',
      rating : 4,
  },
  { title : 'star wars',
  decription :"a good movie" ,
  posterURL: '',
  rating : 4,
},
{ title : 'star wars',
decription :"a good movie" ,
posterURL: '',
rating : 4,
},
{ title : 'star wars',
decription :"a good movie" ,
posterURL: '',
rating : 4,
}
]);
  const [searchValue, setSearchValue] = useState('');
  const getMovieRequest = async()=>{
   const url =`http://www.omdbapi.com/?s=${searchValue}&apikey=c3adf0f8`
   const response = await fetch(url);
   
   const responseJson = await response.json();
   console.log (responseJson)
   if (responseJson.Search){
    setMovies(responseJson.Search)
   };
   
};

useEffect (()=>{
  getMovieRequest(searchValue);
}, [searchValue]);

  return(
    <Router>
      <div className='container-fluid movie-app'> 
        <div className="row d-flex align-items-center mt-4 mb-4">
          <h1>theMovie</h1>
          <Search  searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        <hr />
        <div className=' d-flex align-items-center mt-4 mb-4'>
        <MovieList></MovieList>
        </div>
        <hr />
        <div >
       
    </div>
      
      </div>
    </Router>
    
  );
};

export default App;
