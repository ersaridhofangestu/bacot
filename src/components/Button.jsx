import PropTypes, { string } from 'prop-types';

const Button = ({ children, className, ...props }) => {
    return (
        <button {...props} className={`button_buy ${className}`}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: string
}

export default Button
