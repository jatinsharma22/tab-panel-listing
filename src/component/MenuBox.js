import React from 'react';
import {Row, Col, Card, Button } from "react-bootstrap";

const MenuBox = ({menuData}) => {
  return (
    <>
      
            <Row className='pb-4'>
                {menuData.map((currData, key)=>{
                  const {image, category, name, price, description} = currData;
                    return (
                      <Col lg={4} sm={6} key={key} className='mb-4'>
                        <Card className='border-0 p-3'>
                            <Card.Img variant="top" src={image} />
                            <Card.Body className='px-0 px-lg-3'>
                            <h6 className="card_subtitle">{category}</h6>    
                            
                            <Card.Title className='d-flex'>{name} <span className='ms-auto'>{price}</span></Card.Title>
                            <Card.Text className='position-relative'>{description}</Card.Text>
                                <Button className='d-flex align-items-center' variant="text">Order Now <span className='ms-4'></span></Button>
                            </Card.Body>
                        </Card>  
                    </Col>
                    )
                  })}
            </Row>
      
    </>
  )
}

export default MenuBox
