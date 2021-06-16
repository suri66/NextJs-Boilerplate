import { Component } from 'react';
import PropTypes from 'prop-types';
class Text extends Component {
    render() {
        const { name, type, placeholder = '', id = name, className='input-control', autoComplete='off' } = this.props;
        return(
            <input
                name={name}
                type={type}
                autoComplete={autoComplete}
                className={className}
                placeholder={placeholder}
                id={id}
            />
        )
    }
}
Text.propTypes = {
    name: PropTypes.elementType.isRequired,
    type: PropTypes.elementType.isRequired,
  };
export default Text;