import classNames from 'classnames/bind';
import style from './Recommended.module.scss';
const cx = classNames.bind(style);
function Recommended() {
    return (
        <div className={cx('wrapper')}>
            <h3>Recommended</h3>
        </div>
    );
}

export default Recommended;
