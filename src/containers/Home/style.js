import styled from 'styled-components';

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: 100vh;
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1500px;
  position: absolute;
  padding: 20px;
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
  position: absolute;
  top: 50%;
  left: 105%;
  transform: translate(-50%, -50%);

  img {
    width: 400px;
    height: auto;
    border-radius: 30px;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
`;
