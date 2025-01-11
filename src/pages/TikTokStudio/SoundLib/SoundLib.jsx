import { useState } from 'react';
import classNames from 'classnames/bind';

// Img
import musicTrending from '~/assets/images/music_trending.png';
import musicPop from '~/assets/images/music_pop.png';
import musicVlog from '~/assets/images/music_vlog.png';
import musicLight from '~/assets/images/music_light.png';
import musicElectronic from '~/assets/images/music_electronic.png';
import musicCinemantic from '~/assets/images/music_cinemantic.png';
import musicLove from '~/assets/images/music_love.png';
import musicNature from '~/assets/images/music_nature.png';

import style from './SoundLib.module.scss';
import HowToUsePageMusic from '~/Layout/components/HowToUsePageMusic';
import Carousel from '~/components/Carousel';
import LibraryMusic from '~/Layout/components/LibraryMusic';
const cx = classNames.bind(style);

function HeaderTitle() {
    const [showHowToUse, setShowHowToUse] = useState(false);

    const handleChangeShowHowToUse = () => setShowHowToUse(!showHowToUse);
    return (
        <section className={cx('header')}>
            <h1>Unlimited Sound Library</h1>
            <p>
                Use these sounds to avoid having your videos longer than 1 minute muted. Unlimited sounds have no time
                limit. &nbsp;
                <span onClick={handleChangeShowHowToUse}>How to use?</span>
            </p>
            {showHowToUse && <HowToUsePageMusic onChange={handleChangeShowHowToUse} />}
        </section>
    );
}

const Playlist = [
    {
        src: musicTrending,
        alt: 'Music Trending',
    },
    {
        src: musicPop,
        alt: 'Music Pop',
    },
    {
        src: musicVlog,
        alt: 'Music Vlog',
    },
    {
        src: musicLight,
        alt: 'Music Light',
    },
    {
        src: musicElectronic,
        alt: 'Music Electronic',
    },
    {
        src: musicCinemantic,
        alt: 'Music Cinemantic',
    },
    {
        src: musicLove,
        alt: 'Music Love',
    },
    {
        src: musicNature,
        alt: 'Music Nature',
    },
];


function SoundLib() {
    return (
        <div className={cx('wrapper')}>
            <HeaderTitle />
            <Carousel List={Playlist} />
            <LibraryMusic />
        </div>
    );
}

export default SoundLib;
