import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class ServantCard extends Component {
  render() {
      console.log(this.props.servant);
      const { servant} = this.props;
      const imageCard = servant.extraAssets.charaGraph.ascension[1];
    return (
      <Card className="card-width mb-4">
        <Card.Img variant="top" src={imageCard} />
        <Card.Body>
            <h6>{servant.name}</h6>
          {/* <Card.Title className>{servant.name}</Card.Title> */}
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          {/* <Button variant="primary">Read More</Button> */}
        </Card.Body>
      </Card>
    );
  }
}
