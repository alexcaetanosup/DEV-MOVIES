import React from 'react';
import api from '../../services/api';
import { getImages } from '../../utils/getImages.js';
import {
  Background,
  Info,
  Poster,
  Container,
  ContainerButtons,
} from '../Home/style.js';
import { useState, useEffect } from 'react';
import Button from '../../componets/Button';
import Slider from '../../componets/Slider/index.jsx';

function Home () {
  const [movie, setMovie] = useState();
  const [upcoming, setUpcoming] = useState();
  const [topMovie, setTopMovie] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topPeople, setTopPeople] = useState();

  useEffect(() => {
    async function getMovies () {
      const {
        data: { results },
      } = await api.get('/movie/popular');
      // https://image.tmdb.org/t/p/original/sKlF9YrVu84DYMDAUZEZDCvDxK2.jpg
      setMovie(results[15]);
    }
    console.log(movie);

    async function getTopMovies () {
      const {
        data: { results },
      } = await api.get('/movie/top_rated');
      setTopMovie(results);
    }
    console.log(topMovie);

    async function getUpcoming () {
      const {
        data: { results },
      } = await api.get('/movie/upcoming');
      setUpcoming(results);
    }
    console.log(upcoming);

    async function getTopSeries () {
      const {
        data: { results },
      } = await api.get('/tv/top_rated');
      setTopSeries(results);
    }
    console.log(topSeries);

    async function getPopularSeries () {
      const {
        data: { results },
      } = await api.get('/tv/popular');
      setPopularSeries(results);
    }
    console.log(popularSeries);

    async function getTopPeople () {
      const {
        data: { results },
      } = await api.get('/person/popular');
      setTopPeople(results);
    }
    console.log(topPeople);

    getMovies();
    getTopMovies();
    getUpcoming();
    getTopSeries();
    getPopularSeries();
    getTopPeople();
  }, []);

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
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
              <img alt='capa-do-filme' src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {/* // Busca no index do Slider */}
      {topMovie && <Slider info={topMovie} title={'Top Filmes'} />}
      {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
      {upcoming && <Slider info={upcoming} title={'Lançamentos'} />}
      {popularSeries && (
        <Slider info={popularSeries} title={'Séries Populares'} />
      )}
      {topPeople && <Slider info={topPeople} title={'Artistas Populares'} />}
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
