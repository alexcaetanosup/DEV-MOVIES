import React from 'react';
import api from '../../services/api';
import {
  Background,
  Close_button,
  Container,
} from '../../componets/Modal/style';
import { useState, useEffect } from 'react';

function Modal ({ movieId, setShowModal }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovies () {
      const {
        data: { results },
      } = await api.get(`/movie/${movieId}/videos`);
      console.log(results[0]);
      setMovie(results[0]);
    }
    getMovies();
  }, [movieId]);

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie.key}`}
            title='Youtube Video Player'
            height='500px'
            width='100%'
          ></iframe>
          <Close_button>
            <button className='close-button' title='Fechar'></button>
          </Close_button>
        </Container>
      )}
    </Background>
  );
}

export default Modal;
