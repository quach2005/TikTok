import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import style from './Search.module.scss';
import { IconSearch } from '../Icons';

const cx = classNames.bind(style);

function Search({
    placeholder = '',
    value = '',
    onChange,
    focus = false,
    width = '100%',
    height = '2.5rem',
    icon = false,
    type = 'text',
}) {
    const containerClass = cx('search', { focus });

    return (
        <div className={containerClass} style={{ width, height }}>
            {icon && <IconSearch className={cx('icon')} />}
            <input
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={(e) => onChange?.(e.target.value)}
            />
        </div>
    );
}

Search.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    focus: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
    icon: PropTypes.bool,
    type: PropTypes.string,
};

export default Search;
