import styled from 'styled-components';

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex; /* Adicione display: flex aqui */
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between; /* Ajuste para ter espaço entre os itens */
  align-items: center;
  width: 100%;
  max-width: 1500px;
  padding: 20px;
  position: relative; /* Adicione position: relative para o Poster */
`;

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;
  h1 {
    font-size: 5rem;
    font-weight: 700;
    color: #fff;
  }
  p {
    font-size: 20px;
    font-weight: 700;
    margin-top: 30px;
    margin-bottom: 20px;
    color: #fff;
    text-align: justify;
  }
`;

export const Poster = styled.div`
  z-index: 3;
  margin-left: 50px; /* Adicione uma margem para espaçamento */

  img {
    width: 400px;
    height: auto;
    border-radius: 30px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;
