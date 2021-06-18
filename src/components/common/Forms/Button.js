import PropTypes from 'prop-types';

const Button = ({ type, className, children, isLoading, disabled }) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={`group relative ${className}`} disabled={disabled}>
    {isLoading && (
      <svg className="button-loading mr-2" viewBox="0 0 24 24"/>
    )}
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
  className: 'button-icon',
  isLoading: false,
  disabled: false,
};
Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
export default Button;
