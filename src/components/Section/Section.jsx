import PropTypes from 'prop-types';
import {
  StyledSection,
  SectionTitle,
  ChildrenContainer,
} from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <SectionTitle>{title}</SectionTitle>
      <ChildrenContainer>{children}</ChildrenContainer>
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
