import { LoadMoreButton } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onLoadMore }) => {
  return (
    <LoadMoreButton type="submit" onClick={onLoadMore}>
      Load More
    </LoadMoreButton>
  );
};


Button.propTypes = { onLoadMore: PropTypes.func.isRequired };