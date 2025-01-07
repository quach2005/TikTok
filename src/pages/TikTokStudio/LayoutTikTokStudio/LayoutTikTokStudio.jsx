import classNames from 'classnames/bind';

import style from './Upload.module.scss';
import SidebarUpload from '~/Layout/components/SidebarUpload';
import HeaderUpload from '~/Layout/components/HeaderUpload/';
import { useEffect } from 'react';

const cx = classNames.bind(style);

function LayoutTikTokStudio({ children }) {
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
                <div className={cx('children')}>{children}</div>
            </div>
        </div>
    );
}

export default LayoutTikTokStudio;
