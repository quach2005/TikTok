import classNames from 'classnames/bind';
import style from './Trending.module.scss';
const cx = classNames.bind(style);
function Trending() {
    return (
        <div className={cx('wrapper')}>
            <div>This Is Trending Page</div>
        </div>
    );
}

export default Trending;
