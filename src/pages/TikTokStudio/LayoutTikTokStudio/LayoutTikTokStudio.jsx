import classNames from 'classnames/bind';

import style from './LayoutTikTokStudio.module.scss';
import SidebarUpload from '~/Layout/components/SidebarUpload';
import HeaderUpload from '~/Layout/components/HeaderUpload/';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const cx = classNames.bind(style);

function LayoutTikTokStudio() {
    useEffect(() => {
        return () => {
            localStorage.clear();
        };
    }, []);
    return (
        <div className={cx('wrapper')}>
            <title>TikTok Studio</title>
            <HeaderUpload />
            <div className={cx('body')}>
                <SidebarUpload />
                <div className={cx('children')}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default LayoutTikTokStudio;
