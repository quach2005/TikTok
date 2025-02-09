/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import config from '~/Config';
import style from './Inspiration.module.scss';
import Wrapper from '~/components/Popper/Wrapper';
const cx = classNames.bind(style);

const menus = [
    {
        title: 'Trending',
        path: 'trending',
    },
    {
        title: 'Recommended',
        path: 'recommended',
    },
    {
        title: 'My inspiration',
        path: 'my_inspiration',
    },
];

function Inspiration() {
    const navlink = useNavigate();
    const location = useLocation();
    const [isAcvice, setIsAcvice] = useState({ width: 0, transform: 0 });
    const refMenus = useRef([]);

    useEffect(() => {
        if (location.pathname.split('/').length === 3) {
            navlink(config.routes.treding);
        }
        menus.map((menu, index) => {
            if (location.pathname.includes(menu.path)) {
                handleIsActive(index);
                return 0;
            }
            return -1;
        });
    }, [location.pathname]);

    const handleIsActive = (index) => {
        const transform = refMenus.current.reduce((acc, cur, i) => {
            if (i < index) {
                return acc + cur.offsetWidth;
            }
            return acc;
        }, 0);
        const width = refMenus.current[index].offsetWidth;
        setIsAcvice({ width, transform });
    };
    return (
        <div className={cx('wrapper')}>
            <Wrapper className={cx('container')}>
                <div className={cx('header')}>
                    <h2 className={cx('title')}>Inspiration</h2>
                    <ul className={cx('menu')}>
                        {menus.map((menu, index) => {
                            return (
                                <li
                                    key={menu.title}
                                    className={cx('menu-item',{active: location.pathname.includes(menu.path)})}
                                    ref={(ref) => (refMenus.current[index] = ref)}
                                >
                                    <NavLink to={menu.path}>{menu.title}</NavLink>
                                </li>
                            );
                        })}
                        <div className={cx('underline')} style={{ width: isAcvice.width, left: isAcvice.transform }} />
                    </ul>
                </div>
                <div className={cx('content')}>
                    <Outlet />
                </div>
            </Wrapper>
        </div>
    );
}

export default Inspiration;
