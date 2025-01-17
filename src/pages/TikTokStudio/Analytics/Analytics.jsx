import classNames from 'classnames/bind';

import style from './Analytics.module.scss';
const cx = classNames.bind(style);
function Analytics() {
    return <h1 className={cx('wrapper')}>This Is Page Analytics</h1>;
}

export default Analytics;
