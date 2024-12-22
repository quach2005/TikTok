import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

// Define the Button component
function Button({
    to,
    href,
    onClick,
    children,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    rounded = false,
    className,
    iconLeft,
    iconRight,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
    };
    // Remove all event listeners if the button is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    // Add the to or href prop if the button is a link
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        props.target = '_blank';
        Comp = 'a';
    }

    // Build the classes for the button
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        [className]: className,
    });

    // Render the button
    return (
        <Comp className={classes} {...props} {...passProps}>
            {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
            <span className={cx('title')}>{children}</span>
            {iconRight && <span className={cx('icon')}>{iconRight}</span>}
        </Comp>
    );
}
Button.propTypes = {
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    iconLeft: PropTypes.node,
    iconRight: PropTypes.node,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};
export default Button;
