import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const CarCard = (props) => {
  const { info, location, odometer } = props.car;
  const styleRow = {    
    width: '50vh'
  }
  const styleCarded = {
    borderRadius: '13px',
    width: '351px',
    height: '268px'
  }
  return (
    <div style={styleRow}>
      <Card style={styleCarded}>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>      {info.make}</CardTitle>
          <CardSubtitle>{info.year}</CardSubtitle>
          <CardText></CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};



export default CarCard;