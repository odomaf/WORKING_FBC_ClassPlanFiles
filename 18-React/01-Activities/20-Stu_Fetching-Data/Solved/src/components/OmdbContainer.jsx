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

  // Helper: query OMDb and update UI
  const searchMovie = (query) =>
    API.search(query)
      .then((res) => {
        setResult(res.data);
        setSearch("");
      })
      .catch((err) => console.log(err));

  // ✅ Run once on mount: default result
  useEffect(() => {
    searchMovie("The Matrix");
  }, []);

  const handleInputChange = (e) => setSearch(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const trimmed = search.trim();
    if (!trimmed) return; // Bonus: don't search empty input

    searchMovie(trimmed);
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
