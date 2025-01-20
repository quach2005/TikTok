import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './DefaultLayout.module.scss';
import { AuthContext } from '~/Context/CheckLogin';
import UseState from '~/pages/Login&Sign';

const cx = classNames.bind(styles);
function DefaultLayout() {
    const { userLogin, passedLogin } = useContext(AuthContext);

    return (
        <div className={cx('wrapper')}>
            <title>TikTok - Make your day</title>
            <Header userLogin={userLogin}/>
            <div className={cx('container')}>
                <Sidebar userLogin={userLogin} />
                <div className={cx('content')}>
                    <Outlet />
                </div>
            </div>
            {passedLogin && <UseState />}
        </div>
    );
}
export default DefaultLayout;
