import React, { useEffect } from 'react'
import RestCard from '../components/RestCard'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurant } from '../redux/restuarantSlice';
import { all } from 'axios';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRestaurant())
  }, [])
  const allRestaurant = useSelector((state) => state.restuarantSlice.allRestaurant.restaurants);
  console.log(allRestaurant);
  
  return (
    <div>
      <Row className='mt-'>
        {
          allRestaurant?.length > 0 ?
            allRestaurant.map((resturant) => (
              <Col sm={3} md={4} lg={3} className="px-5 py-3">
                <RestCard resturant={resturant} />
                </Col>
            )) :
            <p>no items</p>
            
        }
        
      </Row>
    </div>
  );
}

export default Home