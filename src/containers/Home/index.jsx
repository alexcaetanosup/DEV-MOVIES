import React from 'react';
import api from '../../services/api';
import {
  Background,
  Info,
  Poster,
  Container,
  ContainerButtons,
} from '../Home/style.js';
import { useState, useEffect } from 'react';
import Button from '../../componets/Button';

function Home () {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovies () {
      const {
        data: { results },
      } = await api.get('/movie/popular');

      // https://image.tmdb.org/t/p/original/sKlF9YrVu84DYMDAUZEZDCvDxK2.jpg

      setMovie(results[10]);
    }
    console.log(movie);
    getMovies();
  }, []);

  return (
    <>
      {movie && (
        <Background
          img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        >
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red={true}>Assista Agora</Button>
                <Button red={false}>Assista o Trailer</Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img
                alt='capa-do-filme'
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Poster>
          </Container>
        </Background>
      )}
    </>
  );
}

export default Home;

// img='https://image.tmdb.org/t/p/original/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg'
// https://image.tmdb.org/t/p/w500
// /sKlF9YrVu84DYMDAUZEZDCvDxK2.jpg
// /1E5baAaEse26fej7uHcjOgEE2t2.jpg
// https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg
// https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
// https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
