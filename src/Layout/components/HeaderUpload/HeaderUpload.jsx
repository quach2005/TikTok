import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useContext } from 'react';

import { AuthContext } from '~/Context/CheckLogin';
import { IconProfile } from '~/components/Icons';
import Menu from '~/components/Popper/menu';
import Image from '~/components/img/Image';
import style from './HeaderUpload.module.scss';
import logoUpload from '~/assets/images/logo_upload.png';
import { Link } from 'react-router-dom';
import config from '~/Config';

const menu = [
    {
        title: 'File',
        icon: <IconProfile />,
    },
    {
        title: 'Log out',
        icon: <FontAwesomeIcon icon={faSignOut} />,
    },
];

const cx = classNames.bind(style);

function HeaderUpload() {
    const authContext = useContext(AuthContext);

    const logout = () => {
        authContext.handleLogout();
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo-header')}>
                <Link to={config.routes.studioHome}>
                    <Image src={logoUpload} alt="Logo Upload" className={cx('logo')} />
                </Link>
            </div>
            <div className={cx('header')}>
                <Menu handleLogout={logout} items={menu} onChange={() => {}} delay={[0, 500]}>
                    <Image
                        className={cx('avt')}
                        src="https://i.pinimg.com/564x/dd/2d/0a/dd2d0a59ad7e79453110b2968af72d89.jpg"
                        alt="Avatar"
                    />
                </Menu>
            </div>
        </div>
    );
}

export default HeaderUpload;
