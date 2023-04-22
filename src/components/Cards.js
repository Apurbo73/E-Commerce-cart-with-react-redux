import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardsData";
const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  return (
    <div className="container ">
      <h2 className="text-center mt-3 mb-4">All Products</h2>

<div className="row ">
{data.map(d =>
        <Card className=" m-1 text-center " style={{ width: "16rem" }}>
          <Card.Img className="mt-3" src={d.imgdata} style={{height:'16rem'}}/>
          <Card.Body>
            <Card.Title>{d.rname}</Card.Title>
            <Card.Text >
            {d.price} taka 
            </Card.Text>
            <Button className="button-hover" variant="primary w-100">Add To Cart</Button>
          </Card.Body>
        </Card>
      )}

</div>
      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default Cards;
