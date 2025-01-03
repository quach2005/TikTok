import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import  Header  from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);


function DefaultLayout({ children, currentUser }) {
    return (
        <div className={cx('wrapper')}>
            <title>TikTok - Make your day</title>
            <Header currentUser={currentUser} />
            <div className={cx('container')}>
                <Sidebar currentUser={currentUser} />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default DefaultLayout;
