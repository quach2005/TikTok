import classNames from 'classnames/bind';
import style from './Search.module.scss';
import { IconSearch } from '../Icons';
const cx = classNames.bind(style);
function Search({ placeholder, focus, width, height }) {
    const className = cx('search', {
        focus: focus,
    });
    return (
        <div className={className} style={{ width:width, height:height }}>
            <IconSearch className={cx('icon')} />
            <input type="text" placeholder={placeholder} />
        </div>
    );
}

export default Search;
