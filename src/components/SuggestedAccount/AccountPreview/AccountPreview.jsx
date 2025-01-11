import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import propTypes from 'prop-types'

import styles from './AccountPreview.module.scss';
import Image from '~/components/img/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview({ data, didFollow }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                <Button className={cx('follow-btn')} primary={!didFollow} outline={didFollow}>
                    {!didFollow? "Follow":"Followed"}
                </Button>
            </header>

            <div className={cx('body')}>
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong className={cx('username')}>{data.nickname}</strong>
                       {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                    </p>
                    <p className={cx('name')}>{data.first_name +" "+ data.last_name}</p>
                </div>
            </div>

            <div className={cx('footer')}>
                <p className={cx('value')}>
                    <strong>{data.followers_count}</strong>
                    <span className={cx('label')}>Followers</span>
                </p>
                <p className={cx('value')}>
                    <strong>{data.likes_count}</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.prototype =  {
    data: propTypes.object.isRequired
}

export default AccountPreview;
