import styled from '@emotion/styled';

export const Position = styled.div`
  /* position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh; */
`;

export const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 40vw;
  min-width: 400px;
  max-width: 80%;
  margin-top: 30px;
  animation: popFromBottom 0.5s ease-in-out;

  @keyframes popFromBottom {
    0% {
      transform: translateY(300px) scale(0);
    }
    100% {
      transform: translateY(0px) scale(1);
    }
  }
`;

export const ImageContainer = styled.div`
  display: inline-block;
  width: 22vmin;
  height: 22vmin;

  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  left: -20vmin;
  top: -3vmin;
  border: 1vmin solid #fff;
`;

export const Image = styled.img`
  height: 22vmin;
  margin-left: -30%;
`;

export const Message = styled.div`
  background: #ffe271;
  padding: 2vmin 4vmin 2vmin 8vmin;
  border-radius: 0px 50px 50px 0px;
  font-size: 3vmin;
  text-align: left;
`;

export const Author = styled.div`
  text-align: left;
  padding: 2px 30px 5px 60px;
  border-radius: 0px 0px 20px;
  font-size: 3.2vmin;
  background: #fff;
  color: #83aebd;
  display: inline-block;
  float: left;
  font-weight: 600;
  font-style: normal;
`;

// https://codepen.io/yemon/pen/gKENEZ
