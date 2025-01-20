import classNames from 'classnames/bind';

import style from './LoginAndSign.module.scss';
const cx = classNames.bind(style);

function LoginAndSign({ menus, getForm }) {
    return (
        <div className={cx('wrapper')}>
            {menus.map((menu, index) => (
                <div key={index} className={cx('container')}>
                    <title>{menu.title}</title>
                    <h1 className={cx('title')}>{menu.title}</h1>
                    <div className={cx('login')}>
                        {menu?.data?.map((item, index) => (
                            <div key={index} className={cx('login-item')} onClick={()=> getForm(item.data)}>
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
