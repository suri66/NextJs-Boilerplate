import { Component } from 'react';
import PropTypes from 'prop-types';
class Button extends Component {
    render() {
        const { type, className='button-icon', children } = this.props;
        return(
            <button
                type={type}
                className={'group relative ' +className}
            >{children}</button>
        )
    }
}
Button.propTypes = {
    type: PropTypes.elementType.isRequired,
};
export default Button;