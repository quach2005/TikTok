import classNames from 'classnames/bind';


import style from './Inspiration.module.scss'
const cx = classNames.bind(style);
function Inspiration() {
    return ( <h1 className={cx('wrapper')}>This Is Page Inspiration</h1> );
}

export default Inspiration;