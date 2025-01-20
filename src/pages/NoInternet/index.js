import classNames from 'classnames/bind'

import Logo from '~/assets/images/Logo.png';

import Image from '~/components/img/Image';
import style from './NoInternet.module.scss'
import { IconNoInternet } from '~/components/Icons';

const cx = classNames.bind(style);
function NoInternet() {
    return (
        <div className={cx('wrapper')}>
            <Image src={Logo} alt={'Logo Tik Tok'} />
            <h2><IconNoInternet width='2.4rem' height='2.4rem' />You are currently offline</h2>
        </div>
    );
}

export default NoInternet;