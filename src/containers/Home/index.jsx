import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getImages } from '../../utils/getImages.js';
import {
  getMovies,
  getTopMovies,
  getUpComing,
  getTopSeries,
  getPopularSeries,
  getTopPeople,
} from '../../services/getData';

import {
  Background,
  Info,
  Poster,
  Container,
  ContainerButtons,
} from '../Home/style.js';
import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import Slider from '../../components/Slider/index.jsx';
import Modal from '../../components/Modal/index.jsx';

function Home () {
  const [movie, setMovie] = useState();
  const [topMovie, setTopMovie] = useState();
  const [upComing, setUpComing] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topPeople, setTopPeople] = useState();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData () {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getUpComing(),
        getTopSeries(),
        getPopularSeries(),
        getTopPeople(),
      ])
        .then(
          ([
            movie,
            topMovie,
            upComing,
            TopSeries,
            popularSeries,
            topPeople,
          ]) => {
            setMovie(movie);
            setTopMovie(topMovie);
            setUpComing(upComing);
            setTopSeries(TopSeries);
            setPopularSeries(popularSeries);
            setTopPeople(topPeople);
          }
        )
        .catch((error) => console.error(error));
    }

    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button
                  red={true}
                  onClick={() => navigate(`/detalhe/${movie.id}`)}
                >
                  Assista Agora
                </Button>
                <Button red={false} onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
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
      {upComing && <Slider info={upComing} title={'Lançamentos'} />}
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
