import { Component } from "react";
import Col from "react-bootstrap/Col";

class SingleMovie extends Component {
  render() {
    return (
      <Col xs={6} md={6} lg={3}>
        <img className="img-fluid poster" src={this.props.poster} alt="movie poster" />
      </Col>
    );
  }
}

export default SingleMovie;
