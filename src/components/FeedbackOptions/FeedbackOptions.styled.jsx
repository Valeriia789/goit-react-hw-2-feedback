import styled from '@emotion/styled';

export const Button = styled.button`
  width: 150px;
  height: 50px;
  margin: 5px;
  cursor: pointer;
  font-size: 20px;
  font-family: 'Staatliches', cursive;
  letter-spacing: 5px;
  background: #ffc421;
  border: 2px solid black;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.4);
  transition: 500ms;

  &:after {
    content: '';
    position: absolute;
    transform: translateX(-55px) translateY(-40px);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: transparent;
    box-shadow: 0px 0px 50px transparent;
    transition: 500ms;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.4);
  }

  &:hover:after {
    background: white;
    box-shadow: 0px 0px 20px #ffc421, 0px 0px 30px #ffc421,
      inset 0px 0px 10px #ffc421;
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    25% {
      transform: translateX(-25px) translateY(-35px);
      width: 15px;
      height: 15px;
    }
    50% {
      transform: translateX(-55px) translateY(-30px);
      width: 5px;
      height: 5px;
    }
    75% {
      transform: translateX(-85px) translateY(-35px);
      width: 15px;
      height: 15px;
    }
  }

  &:focus {
    outline: none;
  }
`;

// https://codepen.io/chancesq/pen/MWKREVg
