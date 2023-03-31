import { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import SingleMovie from "./SingleMovie";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class MyCarousel extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };
  getMovies = async () => {
    try {
      let response = await fetch(`https://www.omdbapi.com/?s=${this.props.query}&apikey=810aa10a`);
      if (response.ok) {
        let data = await response.json();
        console.log(data.Search);
        this.setState({
          movies: data.Search,
          isLoading: false,
        });
      } else {
        console.log("Errore nella ricezione dei dati");
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };

  componentDidMount() {
    console.log("Eseguo la fetch (ComponentDidMount)");
    this.getMovies();
  }

  render() {
    return (
      <>
        <h2 className="text-light mt-2 mb-2">{this.props.nameSaga} saga:</h2>
        <Carousel>
          <Carousel.Item>
            <Row>
              {this.state.movies.map((movie) => (
                <SingleMovie key={movie.imbdID} poster={movie.Poster} />
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default MyCarousel;
