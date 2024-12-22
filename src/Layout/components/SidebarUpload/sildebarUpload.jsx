import classNames from 'classnames/bind';
import style from './SidebarUpload.module.scss';
import Button from '~/components/Button';
import { IconBack, IconUploadPage } from '~/components/Icons';
import Menu from './Menu';
import { NavLink } from 'react-router-dom';
import config from '~/Config';

const cx = classNames.bind(style);
function SidebarUpload() {
    return (
        <div className={cx('wrapper')}>

            {/* Sidebar */}
            <div className={cx('Sidebar')}>
                <Button to={config.routes.upload} primary className={cx('btn-upload')}>
                    <div className={cx('content')}>
                        {' '}
                        <IconUploadPage /> Up Load
                    </div>
                </Button>

                <div className={cx('sidebar-spacer')}></div>

                {/* Sidebar */}
                <Menu />
            </div>

            {/* Btn Back To Home */}
            <NavLink to={config.routes.home} className={cx('footer')}>
                <IconBack width="1.4rem" height="1.4rem" />
                Back to TikTok
            </NavLink>
        </div>
    );
}

export default SidebarUpload;
