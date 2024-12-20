import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Error.module.scss';

const cx = classNames.bind(styles);

function Error() {
    return ( 
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>404</h1>
            <p className={cx('description')}>Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/" className={cx('home-btn')}>
                Back to Home
            </Link>
        </div>
    );
}

export default Error;