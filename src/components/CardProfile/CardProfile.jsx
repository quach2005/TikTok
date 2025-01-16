import classNames from 'classnames/bind';
import style from './CardProfile.module.scss';

import ItemProfile from '../ItemProfile';
const cx = classNames.bind(style);
function CardProfile({ data_user }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('user-info-box')}>
                <ItemProfile img={data_user.avt} title={data_user.name} alt={'avt-user'} />
            </div>
            <div className={cx('interact')}>
                <div className={cx('following')}>
                    <span>Following</span>
                    <span>{data_user.following_count}</span>
                </div>
                <div className={cx('follower')}>
                    <span>Follower</span>
                    <span>{data_user.follower_count}</span>
                </div>
                <div className={cx('likes')}>
                    <span>Likes</span>
                    <span>{data_user.likes_count}</span>
                </div>
            </div>
        </div>
    );
}

export default CardProfile;
