import React from 'react'
import CardMovie from './CardMovie'
import { Row } from 'react-bootstrap'
import Pagination from "./Pagination";
const MovieList = ({movies,getPage,pageCount}) => {
  return (
    <Row className='mt-3'>
      {movies.length >= 1 ? (movies.map((mov)=>{
        return(<CardMovie key={mov.id} mov={mov}/>)
      })): <h2>No Movies</h2>}
     <Pagination getPage={getPage} pageCount={pageCount}></Pagination>
    </Row>
  )
}

export default MovieList
