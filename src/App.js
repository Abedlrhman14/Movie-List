import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "./components/MovieList";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import {BrowserRouter , Routes , Route} from "react-router-dom"
import MovieDettiles from "./components/MovieDettiles";
function App() {
  //get movies from api
  const [movies,setmovies] = useState([])
  const [pageCount,setpageCount] = useState([0])
  const getAllMovies= async()=>{
   const res=await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=e4285999753c19416294af7c63fe4fee&language=en-US&page=1')
   setmovies(res.data.results)
   setpageCount(res.data.total_pages)
  }
  useEffect(()=>{
    getAllMovies();
    // console.log(movies)
  },[])
  //to search in api
  const search = async(word)=>{
    if(word=== ''){
      getAllMovies();
    }else{
      const res=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e4285999753c19416294af7c63fe4fee&query=${word}&language=`)
      setmovies(res.data.results)
      setpageCount(res.data.total_pages)
    } 
  }  
  
  const getPage = async(page)=>{
    const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e4285999753c19416294af7c63fe4fee&language=en-US&page=${page}`)
    setmovies(res.data.results)
  }
  return (
    <div className="color-body">
      <Navbar search={search}></Navbar>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/"element={<MovieList movies={movies} getPage={getPage} pageCount={pageCount} ></MovieList>}/>
            <Route path="/movie/:id" element={<MovieDettiles/>}/>
            
          </Routes>
         </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
