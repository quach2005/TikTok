import classNames from 'classnames/bind';

import style from './LoginAndSign.module.scss';
const cx = classNames.bind(style);

function LoginAndSign({ data }) {
    return (
        <div className={cx('wrapper')}>
            {data.map((item, index) => (
                <div key={index} className={cx('container')}>
                    <title>{item.title}</title>
                    <h1 className={cx('title')}>{item.title}</h1>
                    <div className={cx('login')}>
                        {item.data.map((item, index) => (
                            <div key={index} className={cx('login-item')}>
                                <div className={cx('icon')}>{item.icon}</div>
                                <p className={cx('item-title')} style={{ fontSize: item.fontSize }}>
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default LoginAndSign;
