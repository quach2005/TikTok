import classNames from 'classnames/bind';
import { useEffect, useLayoutEffect, useState } from 'react';

import Button from '../Button';
import Search from '../Search';
import formatNumberWithCommas from '~/Lib/formatNumberWithCommas';
import ItemProfile from '../ItemProfile/ItemProfile';
import { IconBack, IconCollect, IconPlay } from '../Icons';
import logo from '~/assets/images/logo_tiktok.jpeg';
import style from './ShowList.module.scss';
import formatDuration from '~/Lib/formatDuration';
import { getStyleMusic } from '~/services/Get-music';
import random from '~/Lib/random';
import Tippy from '@tippyjs/react';
const cx = classNames.bind(style);
const MAX_PAGE = 1250;
let keyMusic = 'track';
let keyPage = '@attr';
let totalPages = 0;
let total = 0;

const Header = ({ titleTable = [] }) => {
    return (
        <thead>
            <tr>
                {titleTable.map((item, index) => (
                    <th key={index}>
                        <span>{item.title}</span>
                    </th>
                ))}
            </tr>
        </thead>
    );
};

const Topic = [
    'Tourism',
    'Cuisine',
    'Christmas',
    'Autumn',
    'Love',
    'Can jump',
    'Rainy Day, Vlog',
    'Dancing',
    'Jumpable, Low',
];
const Body = ({ Musics = [] }) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const ListMusic = Musics[keyMusic] ?? [];
    const [listStyle, setListStyle] = useState([]);

    useEffect(() => {
        const timeawait = setTimeout(() => {
            setListStyle([]);
            ListMusic.map(async (item) => {
                const data = await getStyleMusic(item.artist.name, item.name);
                for (let i in data) {
                    setListStyle((preview) => [...preview, data[i]['tag'][0].name]);
                }
            });
        }, 200);

        return () => {
            clearTimeout(timeawait);
        };
    }, [ListMusic]);
    return (
        <tbody>
            {ListMusic.map((Music, index) => {
                return (
                    <tr key={index}>
                        <td>
                            <ItemProfile img={logo} title={Music.name} description={'Offcial Sound Studio'} />
                        </td>
                        <td>{random(Topic, 'list')}</td>
                        <td>{listStyle[index]}</td>
                        <td>{formatDuration(Music.duration)}</td>
                        <td>English</td>
                        <td>
                            <Tippy content="Add to Favorites" placement='top-start'>{<div><IconCollect /></div>}</Tippy>
                        </td>
                        <template className={cx('hover')}>
                            <IconPlay />
                        </template>
                    </tr>
                );
            })}
        </tbody>
    );
};

const Footer = ({ setPage = () => {}, Page }) => {
    const [value, setValue] = useState('');
    const getValueSearch = (value) => {
        if (value === '0') {
            return;
        }
        setValue(value === '' ? value : Number(value));
    };
    const handlePage = () => {
        if (value === '') {
            setPage(MAX_PAGE);
        } else {
            setPage(value);
        }
    };

    const backPage = () => {
        if (Page > 1) {
            setPage(Page - 1);
        }
    };

    const nextPage = () => {
        if (Page < totalPages) {
            setPage(Page + 1);
        }
    };
    return (
        <div className={cx('footer')}>
            <div className={cx('total')}>Total: {formatNumberWithCommas(total)}</div>
            <div className={cx('pagination')}>
                <Button onClick={backPage}>
                    <IconBack />
                </Button>
                <div className="page">{Page}</div>
                <Button onClick={nextPage}>
                    <IconBack />
                </Button>
            </div>
            <div className={cx('limit')}>
                <Search
                    value={value}
                    onChange={getValueSearch}
                    type={'number'}
                    focus
                    width={'5rem'}
                    height={'2.6rem'}
                    placeholder={totalPages < MAX_PAGE ? totalPages : MAX_PAGE}
                />
            </div>
            <Button text onClick={handlePage}>
                Start
            </Button>
        </div>
    );
};

function ShowList({ titleTable = [], Data = {}, PageStart = 1, setPage = () => {} }) {
    const [Musics, setMusics] = useState([]);
    useLayoutEffect(() => {
        for (let key in Data) {
            setMusics(Data[key]);
            total = Data[key][keyPage].total;
            totalPages = Data[key][keyPage].totalPages;
        }
    }, [Data]);

    return (
        <div className={cx('wrapper')}>
            <table>
                <colgroup>
                    {titleTable.map((item, index) => (
                        <col key={index} style={{ width: item.width }} />
                    ))}
                </colgroup>
                <Header titleTable={titleTable} />
                <Body Musics={Musics} />
            </table>
            <Footer setPage={setPage} Page={PageStart} />
        </div>
    );
}

export default ShowList;
