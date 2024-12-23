import classNames from 'classnames/bind';

import style from './HomeTikTokStudio.module.scss';
import Image from '~/components/img/Image';
const cx = classNames.bind(style);

const profile = {
    avt: 'https://i.pinimg.com/564x/dd/2d/0a/dd2d0a59ad7e79453110b2968af72d89.jpg',
    userName: 'phamquach2005',
    likeCount: 917234,
    follower: 887123,
    followed: 1675312,
};

function HomeTikTokStudio() {
    return (
        <div className={cx('wrapper')}>
            {/* User Info */}
            <div className={cx('user-info')}>
                <Image
                    src="https://i.pinimg.com/564x/dd/2d/0a/dd2d0a59ad7e79453110b2968af72d89.jpg"
                    alt="Avatar"
                    className={cx('user-avt')}
                />
                <div className={cx('user')}>
                    <div className={cx('user-name')}>{profile.userName}</div>
                    <div className={cx('user-interact')}>
                        <div className={cx('user-interact')}>
                            Like count<p className={cx('user-count')}>{profile.likeCount}</p>
                        </div>
                        <div className={cx('user-interact')}>
                            Follower<p className={cx('user-count')}>{profile.follower}</p>
                        </div>
                        <div className={cx('user-interact')}>
                            Followed<p className={cx('user-count')}>{profile.followed}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('spacer')}></div>

        </div>
    );
}

export default HomeTikTokStudio;
