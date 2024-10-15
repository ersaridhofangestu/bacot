import PropTypes from 'prop-types';

const Button = ({ children, ...props }) => {
    return (
        <button {...props} className='button_buy'>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Button
