import classNames from 'classnames/bind';
import PropTypes from 'prop-types'

import default_music from '~/assets/images/default_music.png';
import style from './Carousel.module.scss';
import { useState } from 'react';
import { IconBack } from '../Icons';
import Image from '../img/Image';
const cx = classNames.bind(style);

function Carousel({List = [], Img_default = default_music}) {
    const [page, setPgae] = useState(1);

    const handleNextPlaylist = () => {
        setPgae(page + 1);
    };

    const handlePreviewPlaylist = () => {
        setPgae(page - 1);
    };
    return (
        <section className={cx('music-playlist')}>
            <div className={cx('music-playlist-header')}>
                <h3>Playlist</h3>
                <div className={cx('music-playlist-pagination')}>
                    <button onClick={handlePreviewPlaylist} disabled={page === 1}>
                        <IconBack className={cx('icon-preview', { disabled: page === 1 })} />
                    </button>
                    <button>
                        {' '}
                        {page}/{List.length / 4}
                    </button>
                    <button onClick={handleNextPlaylist} disabled={page !== 1}>
                        <IconBack className={cx('icon-next', { disabled: page !== 1 })} />
                    </button>
                </div>
            </div>
            <div className={cx('music-playlist-list')}>
                {List.slice((page - 1) * 1 * 4, page * 4).map((item, index) => (
                    <div className={cx('music-playlist-item')} key={index}>
                        <Image src={item.src} alt={item.alt} fallback={Img_default} className={cx('img')} />
                        <div className={cx('cover-back')}></div>
                    </div>
                ))}
            </div>
        </section>
    );
}

Carousel.propTypes = {
    List : PropTypes.array,
    Img_default : PropTypes.node
}

export default Carousel;
