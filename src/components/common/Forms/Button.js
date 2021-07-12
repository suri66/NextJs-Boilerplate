import PropTypes from 'prop-types';

const Button = ({ type, className, children }) => (
  <button type={type === 'submit' ? 'submit' : 'button'} className={`group relative ${className}`}>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.elementType.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: 'button-icon',
};

export default Button;
