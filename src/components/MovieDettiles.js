import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import {Link , useParams} from "react-router-dom"
const MovieDettiles = () => {
  //to get movies details
  const param=useParams();
  const [movies,setmovies] =useState([])
  const getAllMoviesDetail= async()=>{
    const res=await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=e4285999753c19416294af7c63fe4fee`)
    setmovies(res.data)
   }
   useEffect(()=>{
    getAllMoviesDetail();
   },[])
  return (
    <div>
      <Row className='justify-content-center'>
        <Col md="12" xs="12" sm="12" className='mt-4'>
            <div className='card-details d-flex align-items-center'>
                <img className='img-movie w-30' src={`https://image.tmdb.org/t/p/w500/`+movies.poster_path} alt="Photo"/>
                <div className='justify-content-center text-center mx-auto'>
                    <p className='card-text-details border-bottom'>
                        Movie Name:{movies.title}
                    </p>
                    <p className='card-text-details border-bottom'>
                        Date of Movie:{movies.release_date}
                    </p>
                    <p className='card-text-details border-bottom'>
                        vote_count:{movies.vote_count}
                    </p>
                    <p className='card-text-details border-bottom'>
                        vote_average:{movies.vote_average}
                    </p>
                </div>
            </div>
        </Col>
      </Row>
      <Row className='justify-content-center'> 
        <Col md="10" xs="12" sm="12" className='mt-1'>
           <div className='card-story d-flex flex-column align-items-start'>
            <div className='text-end p-4'>
                <p className='card-text-title border-bottom'>Story:</p>
            </div>
            <div className='text-end px-2'>
                <p className='card-text-story'>{movies.overview}</p>
            </div>
           </div>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col md="10" xs='12' sm='12' className='mt-2 d-flex justify-content-center' >
          <Link to="/">
          <button style={{backgroundColor:'#b45b35', border: "none"}} className='btn btn-primary mx-2'>Home Page</button> 
          </Link>
            <a href={movies.homepage}><button style={{backgroundColor:'#b45b35', border: "none"}} className='btn btn-primary'>Watch Movie</button></a>
        </Col>
      </Row>
    </div>
  )
}

export default MovieDettiles
