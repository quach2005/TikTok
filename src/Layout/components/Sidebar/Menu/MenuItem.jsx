import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ title, icon, to, activeIcon }) {
    return (
        <NavLink 
            id={`menu-${title.toLowerCase()}`} 
            className={(nav) => cx('menu-item', { active: nav.isActive })} 
            to={to}
        >
            {({ isActive }) => (
                <>
                    <span className={cx('icon')}>{isActive ? activeIcon : icon}</span>
                    <span className={cx('title')}>{title}</span>
                </>
            )}
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
};

export default MenuItem;
