import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({resturant}) {
  return (
    <div>
          {/* convert this into dynamice id */}
          <Link to={`/resturant_view/${resturant?.id}`} style={{textDecoration:"none"}}>
          <Card style={{ width: '18rem' }} className='p-2'>
      <Card.Img variant="top" src={resturant.photograph} />
      <Card.Body>
            <Card.Title className='text-center text-warning fs-6'>{resturant.name}</Card.Title>
        <Card.Text>
              neighbour hood: <span className='text-warning'>{resturant.neighborhood }</span>
        </Card.Text>
      </Card.Body>
    </Card>
          </Link>
         
      </div>
  )
}

export default RestCard