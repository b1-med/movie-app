import React ,{useState} from 'react';
import SearchMovie from './searchMovie';

function Search ( {setMovieList , allMovies}){
const [search , setSearch]=useState({
    searchword:"",
   
});


const changeruserInput=(e)=>{
 let searchword=e.target.value;

setSearch(prevState =>{
    return {...prevState , searchword:searchword}
});
 if (searchword !=="" )
 { setMovieList(allMovies.filter(el => el.name.includes(searchword)))}
 else {
     setMovieList(allMovies);
 }
}

    return (<section>
        <SearchMovie changeruserInput={changeruserInput}/>
    </section>)
}
export default Search;