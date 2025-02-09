import classNames from 'classnames/bind';
import style from './My_Inspiration.module.scss';
const cx = classNames.bind(style);
function MyInspiration() {
    return (
        <div className={cx('wrapper')}>
            <h3>My Inspiration</h3>
        </div>
    );
}

export default MyInspiration;
