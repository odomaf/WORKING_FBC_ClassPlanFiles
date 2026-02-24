import { useState, useEffect } from "react";
import Container from "./UI/Container";
import Row from "./UI/Row";
import Col from "./UI/Col";
import Card from "./UI/Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

const OmdbContainer = () => {
  const [result, setResult] = useState({});
  const [search, setSearch] = useState("");

  // Helper: perform the API call and update state
  const searchMovie = (query) =>
    API.search(query)
      .then((res) => {
        setResult(res.data);
        setSearch("");
      })
      .catch((err) => console.log(err));

  // TODO 1: Fix useEffect so the default search only runs ONCE on page load
  // Hint: useEffect takes a second argument called the dependency array.
  useEffect(() => {
    searchMovie("The Matrix");
  });

  // TODO 2: Fix handleInputChange so typing updates the `search` state
  const handleInputChange = (e) => console.log(e.target.value);

  // TODO 3: Fix handleFormSubmit so it actually searches for the movie
  // Requirements:
  // - prevent default
  // - call searchMovie(search)
  // - Bonus: don't search if search is empty/whitespace
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const {
    Title = "",
    Poster = "",
    Director = "",
    Genre = "",
    Released = "",
  } = result;

  return (
    <Container>
      <Row>
        <Col size="md-8">
          <Card heading={Title || "Search for a Movie to Begin"}>
            {Title ? (
              <MovieDetail
                title={Title}
                src={Poster}
                director={Director}
                genre={Genre}
                released={Released}
              />
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Card>
        </Col>

        <Col size="md-4">
          <Card heading="Search">
            <SearchForm
              value={search}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OmdbContainer;
