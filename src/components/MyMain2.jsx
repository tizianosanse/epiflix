import { Component } from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";

class Main extends Component {
  state = {
    movies: [],
    loader: true,
    error: {
      variant: "success",
      code: false,
      message: "",
    },
  };
  endpoint = "http://www.omdbapi.com/?apikey=9af4d5d8&s=";
  props = "lord-of-the-rings";
  componentDidMount = async () => {
    try {
      const risp = await fetch(this.endpoint + this.props);
      this.setState({ loader: false });

      if (risp.ok) {
        const movies = await risp.json();
        console.log(movies.Search);

        if (movies.Search.length > 0) {
          this.setState({
            movies: movies.Search,
            error: {
              variant: "success",
              code: true,
              message: "Contenuto Caricato",
            },
          });
          setTimeout(() => {
            this.setState({
              error: {
                variant: "success",
                code: false,
                message: "Contenuto Caricato",
              },
            });
          }, 500);
        } else {
          this.setState({
            error: {
              variant: "danger",
              code: true,
              message: `Errore: ${risp.status}`,
            },
          });
        }
      } else {
        this.setState({
          error: {
            variant: "danger",
            code: true,
            message: `Errore: ${risp.status}`,
          },
        });
      }
    } catch (error) {
      this.setState({ loader: false });
      this.setState({
        error: { variant: "danger", code: true, message: `Errore: ${error}` },
      });
    }
  };
  render() {
    return (
      <>
        {this.state.loader ? (
          <Spinner animation="border" role="status" variant="light">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <>
            {this.state.error.code && (
              <Alert variant={this.state.error.variant}>
                {this.state.error.message}
              </Alert>
            )}
            <Row className=" mb-4 no-gutters text-center">
              {this.state.movies &&
                this.state.movies
                  .filter(
                    (elem) => elem.Type === "movie" && elem.Poster !== "N/A"
                  )
                  .slice(0, 6)
                  .map((elem, index) => (
                    <Col className=" mb-2 px-1" key={`${elem.imdbID}-${index}`}>
                      <img
                        className="img-fluid"
                        src={elem.Poster}
                        alt="movie"
                      />
                    </Col>
                  ))}
            </Row>
          </>
        )}
      </>
    );
  }
}
export default Main;
