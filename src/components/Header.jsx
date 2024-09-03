import React from 'react'
import {Container , Navbar} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchRestuarant } from '../redux/restuarantSlice';

function Header() {
  const dispatch = useDispatch()
  return (
      <div>
           <Navbar variant='dark mt-3'>
              <Container>
          <Link to='/' style={{ textDecoration: "none", overflowY: "hidden" }}>
            <div className="d-flex justify-content-between align-items-center">
                  <Navbar.Brand>
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/4287/4287725.png"
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />{' '}
            Food <span className='text-warning'>circle</span>
              </Navbar.Brand>
              <input onChange={(e)=>dispatch(searchRestuarant(e.target.value))} type="text" className='form-control ms-150 w-100' placeholder='Search by neighborhood' />
              </div>
                  </Link>
          
        </Container>
      </Navbar>
    </div>
  )
}

export default Header