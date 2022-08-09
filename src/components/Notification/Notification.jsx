import PropTypes from 'prop-types';
import {
  Position,
  Container,
  ImageContainer,
  Image,
  Message,
  Author,
} from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <>
      <Position></Position>
      <Container>
        <ImageContainer>
          <Image
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=a8ccd69bd6cc884f728949673c6829cf"
            alt=""
          />
        </ImageContainer>
        <Message>{message}</Message>
        <Author>Developers</Author>
      </Container>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
