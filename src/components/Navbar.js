import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = ({search}) => {
  const onSearch = (word)=>{
    search(word)
  }
  return (
    <div  className='nav-style w-100'>
   <Container>
        <Row className='pt-2'>
            <Col xs="2" lg="1">
                <img className='logo' src='logo.png'/>
            </Col>
            <Col xs="10" lg="11" className='d-flext align-items-center'>
                <div className='search w-100'>
                <i className="fa fa-search"></i>
                {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
                    <input onChange={(e)=>{onSearch(e.target.value)}} type='text' className='form-control' placeholder='search'/>
                </div>
            </Col>
        </Row>
   </Container>
    </div>
  )
}


export default Navbar
