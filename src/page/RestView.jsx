import React from "react";
import { Col, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Collapse from "react-bootstrap/Collapse";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function RestView() {
  //useparam() hook is used to get parameter passed to URL
  const {id} = useParams()
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [open, setOpen] = useState(false);

  const allRestaurant = useSelector((state) => state.restuarantSlice.allRestaurant.restaurants);
  const selectedRestaurant = allRestaurant?.find((item) => item.id == id)
  console.log("selectedRestaurant");
  
  console.log(allRestaurant);
  

  return (
    <>
      <Row className="mt-5 mb-5">
        <Col md={1}></Col>
        <Col md={3}>
          <img
            src={selectedRestaurant.photograph}
            alt=""
            width="100%"
            height="100%"
            className="rounded"
          />
        </Col>
        <Col md={7} className="px-5">
          <hr />
          <h4 className="text-center">
            Restaurant <span className="text-warning">Details</span>
          </h4>
          <hr />
          <ListGroup>
            <ListGroup.Item>
              <h5 className="text-center p-5">{selectedRestaurant.name}</h5>
            </ListGroup.Item>
            <ListGroup.Item>neighbour:{selectedRestaurant.neighborhood}</ListGroup.Item>
            <ListGroup.Item>address:{selectedRestaurant.address}</ListGroup.Item>
            <ListGroup.Item>cuisine type:{selectedRestaurant.cuisine_type}</ListGroup.Item>
            <ListGroup.Item className="text-center p-3 mb-2">
              <button className="btn btn-warning" onClick={handleShow}>
                operating hours
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>operating hours</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <ListGroup>
      <ListGroup.Item>monday:{selectedRestaurant.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>tuesday:{selectedRestaurant.operating_hours.Tuesday}</ListGroup.Item>
      <ListGroup.Item>wednesday:{selectedRestaurant.operating_hours.Wednesday}</ListGroup.Item>
      <ListGroup.Item>thursday:{selectedRestaurant.operating_hours.Thursday}</ListGroup.Item>
      <ListGroup.Item>friday:{selectedRestaurant.operating_hours.Friday}</ListGroup.Item>
      <ListGroup.Item>saturday:{selectedRestaurant.operating_hours.Saturday}</ListGroup.Item>
      <ListGroup.Item>sunday:{selectedRestaurant.operating_hours.Sunday}</ListGroup.Item>
    </ListGroup>
                </Modal.Body>
              </Modal>
              <button
                className="btn btn-warning ms-3"
                onClick={() => setOpen(!open)}
              >
                click here to see reviews
              </button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col md={4}></Col>
        <Col md={7}>
          <Collapse in={open}>
            
            <div >
              <hr />
              {
                selectedRestaurant?.reviews?.length > 0 ?
                  selectedRestaurant.reviews.map((item) => (
                    
                    <div>
                      <hr />
                          <div className="mt-2">
                        <h6>name and date: {item.name} - { item.date}</h6>
                        <p>rating:{ item.rating}</p>
                        <p>description: { item.comments}</p>
                      </div>
                      </div>
                  )) :
                  <p>no items</p>
              }
                          
            </div>
          </Collapse>
        </Col>
      </Row>
    </>
  );
}

export default RestView;
