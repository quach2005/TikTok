import classNames from 'classnames/bind';
import style from './Search.module.scss';
import { IconSearch } from '../Icons';
const cx = classNames.bind(style);
function Search({ placeholder = '', value, onChange, focus = false, width, height, icon, type = 'text' }) {
    const className = cx('search', {
        focus: focus,
    });
    return (
        <div className={className} style={{ width: width, height: height }}>
            {icon && <IconSearch className={cx('icon')} />}
            <input
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

export default Search;
