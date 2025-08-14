import styled from 'styled-components';

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background: #000;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 50px;
  max-width: 1200px;

  iframe {
    border: none;
  }
`;

export const Close_button = styled.div`
  button {
    left: 30px;
    top: -250px;
  }
  .close-button {
    position: relative;
    width: 40px;
    height: 40px;
    border: none;
    background-color: #f44336; /* Cor de fundo vermelha */
    border-radius: 50%; /* Transforma o botão em um círculo */
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none; /* Remove a borda de foco */
    transition: background-color 0.3s ease;
  }
  .close-button::before,
  .close-button::after {
    content: '';
    position: absolute;
    width: 60%;
    height: 2px; /* Espessura das linhas do X */
    background-color: white;
    transition: transform 0.3s ease;
  }

  .close-button::before {
    transform: rotate(45deg); /* Gira a primeira linha em 45 graus */
  }

  .close-button::after {
    transform: rotate(-45deg); /* Gira a segunda linha em -45 graus */
  }

  .close-button:hover {
    background-color: #d32f2f; /* Cor mais escura ao passar o mouse */
  }

  .close-button:hover::before,
  .close-button:hover::after {
    transform: rotate(
      0deg
    ); /* Opcional: Efeito que faz o X desaparecer ao passar o mouse */
  }
`;
