import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import Image from '../img/Image';
import style from './ItemProfile.module.scss';
const cx = classNames.bind(style);
function ItemProfile({ img, alt, title,tick, description }) {
    return (
        <div className={cx('account-item-wrapper')}>
            <Image className={cx('avatar')} src={img} alt={alt??"No Alt"} />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong className={cx('username')}>{title}</strong>
                    {tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <p className={cx('name')}>{description}</p>
            </div>
        </div>
    );
}

export default ItemProfile;
