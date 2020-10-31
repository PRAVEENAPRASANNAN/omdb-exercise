import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Card } from "reactstrap";

export default function BookingPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const { movieId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getMovieDetail();
  }, []);

  function getMovieDetail() {
    setLoading(true);
    fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=51a61738`)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setData(result);
      })
      .catch((error) => {
        setLoading(false);
        console.log("error", error);
      });
  }

  function onClickBook() {
    alert("Ticket Booked");
  }

  return (
    <Container>
      <Card className="w-50 p-6 bg-secondary border-dark text-center">
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <>
            <h2 class="text-white">{data.title}</h2>
            <h4 class="text-white">Year: {data.year}</h4>
            <p>
              <img src={data.Poster} alt="img" className="img-thumbnail" />
            </p>
            <h5 class="text-white text-justify p-2">
              Rating: {data.imdbRating}
            </h5>
            <h6 class="text-white text-justify p-2">
              Language: {data.Language}
            </h6>
            <h6 class="text-white text-justify p-2">Country: {data.Country}</h6>
            <h6 class="text-white text-justify p-2">
              Director : {data.Director}
            </h6>
            <h6 class="text-white text-justify p-2">Writer : {data.Writer}</h6>
            <h6 class="text-white text-justify p-2">Actors : {data.Actors}</h6>
            <h6 class="text-white text-justify p-2">Plot: {data.Plot}</h6>
            <br />
            <button
              type="button"
              className="btn btn-primary"
              onClick={onClickBook}
            >
              Book Ticket
            </button>
            <button
              type="button"
              className="btn btn-danger m-4"
              onClick={() => history.goBack()}
            >
              Go Back
            </button>
          </>
        )}
      </Card>
    </Container>
  );
}
