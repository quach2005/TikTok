import classNames from 'classnames/bind';
import style from './View.module.scss';
const cx = classNames.bind(style);

function View({ data }) {
    return (
        <div className={cx('wrapper')}>
            <h4>{data.name}</h4>
            <p>{data.count}</p>
            <span>+0 (--) vs. January 1 - January 7</span>
        </div>
    );
}

export default View;
