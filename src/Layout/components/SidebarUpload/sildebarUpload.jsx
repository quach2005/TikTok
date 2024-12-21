import classNames from 'classnames/bind';

import Image from '~/components/img/Image';
import style from './SidebarUpload.module.scss';
import logoUpload from '~/assets/images/logo_upload.png';
import Button from '~/components/Button';
import { IconBack, IconUploadPage } from '~/components/Icons';
import Menu from './Menu';
import { NavLink } from 'react-router-dom';
import config from '~/Config';

const cx = classNames.bind(style);
function SidebarUpload() {
    return (
        <div className={cx('wrapper')}>
            {/* Header */}
            <div className={cx('header')}>
                <Image src={logoUpload} alt="Logo Upload" className={cx('logo')} />
            </div>

            <div className={cx('Sidebar')}>
                <Button to={config.routes.uploadPage} primary className={cx('btn-upload')} >
                    <div className={cx('content')}>
                        {' '}
                        <IconUploadPage /> Up Load
                    </div>
                </Button>

                <div className={cx('sidebar-spacer')}></div>

                {/* Quản Lý */}
                <Menu />
            </div>

            <NavLink to={config.routes.home} className={cx('footer')}>
                <IconBack width="1.4rem" height="1.4rem" />
                Back to TikTok
            </NavLink>
        </div>
    );
}

export default SidebarUpload;
