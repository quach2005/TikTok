import classNames from 'classnames/bind';
import style from './HowToUsePageMusic.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(style);
function HowToUsePageMusic({ onChange }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('video')}>
                    <video
                        src={
                            'https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/ies/creator_center/static/media/sounds_landing_guide.ee762788.mp4'
                        }
                        muted
                        autoPlay
                        loop
                    />
                </div>
                <div className={cx('footer')}>
                    <h2>Unlimited sound usage</h2>
                    <Button primary onClick={onChange}>
                        Go it
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default HowToUsePageMusic;
