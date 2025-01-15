import classNames from 'classnames/bind';
import { useEffect, useMemo, useState } from 'react';

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

const Header = ({ titleTable = [] }) => (
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

const Body = ({ ListMusic = [] }) => {
    const [listStyle, setListStyle] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const memoizedListMusic = useMemo(() => ListMusic, [ListMusic]);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const styles = await Promise.all(
                    memoizedListMusic.map(async (item) => {
                        const data = await getStyleMusic(item.artist.name, item.name);
                        return data.toptags?.tag?.length > 0 ? data.toptags.tag[0].name : '-';
                    }),
                );
                setListStyle(styles);
            } catch (error) {
                console.error('Error fetching song styles:', error.message);
                setListStyle(memoizedListMusic.map(() => '-'));
            } finally {
                setLoading(false);
            }
        })();
    }, [memoizedListMusic]);

    if (isLoading) {
        return (
            <tbody>
                <tr>
                    <td>Loading...</td>
                </tr>
            </tbody>
        );
    }

    return (
        <tbody>
            {ListMusic.map((Music, index) => (
                <tr key={index}>
                    <td>
                        <ItemProfile img={logo} title={Music.name} description={'Official Sound Studio'} />
                    </td>
                    <td>{random(Topic, 'list')}</td>
                    <td>{listStyle[index]}</td>
                    <td>{formatDuration(Music.duration)}</td>
                    <td>English</td>
                    <td>
                        <Tippy content="Add to Favorites" placement="top-start">
                            <div>
                                <IconCollect />
                            </div>
                        </Tippy>
                    </td>
                    <td className={cx('hover')}>
                        <IconPlay />
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

const Footer = ({ totalPages, total, Page, setPage }) => {
    const [value, setValue] = useState('');

    const handleInputChange = (val) => {
        if (val === '0') return;
        setValue(val === '' ? '' : Number(val));
    };

    const handlePageChange = () => {
        setPage(value ? value : MAX_PAGE);
    };

    const calculatePageRange = (start, end, focusPage) => {
        let array = [];
        for (let i = start; i <= end; i++) {
            array.push(
                <div key={i} className={cx('page', { focus: i === focusPage })} onClick={() => setPage(i)}>
                    {i}
                </div>,
            );
        }
        return array;
    };

    const FirstPages = () => {
        let total_pages = Page > 2 && Page < 5 ? Page + 1 : 3;
        return calculatePageRange(1, Math.min(MAX_PAGE, total_pages), Page);
    };

    const MidPages = () => {
        return calculatePageRange(Page - 1, Math.min(Page + 1, MAX_PAGE - 3), Page);
    };

    const LastPage = () => {
        let Difference = MAX_PAGE - Page;
        let total_pages = Difference > 1 && Difference < 4 ? Difference + 1 : 2;
        return calculatePageRange(MAX_PAGE - total_pages, Math.max(MAX_PAGE, total_pages), Page);
    };

    const showEllipsis = (targetPage) => (
        <div className={cx('ellipsis')}>
            <span onClick={() => setPage(targetPage)}>...</span>
        </div>
    );

    const RenderedPagination = () => {
        return (
            <>
                {FirstPages()}
                {Page > 4 && MAX_PAGE - Page > 3 && (
                    <>
                        {showEllipsis(Math.max(MAX_PAGE, Page - 5))}
                        {MidPages()}
                    </>
                )}

                {MAX_PAGE > 5 && (
                    <>
                        {showEllipsis(Math.min(MAX_PAGE, Page + 5))}
                        {LastPage()}
                    </>
                )}
            </>
        );
    };

    return (
        <div className={cx('footer')}>
            <div className={cx('total')}>Total: {formatNumberWithCommas(total)}</div>
            <div className={cx('pagination')}>
                <Button onClick={() => setPage(Math.max(1, Page - 1))} className={cx('page', { allowed: Page === 1 })}>
                    <IconBack />
                </Button>
                {<RenderedPagination />}
                <Button
                    onClick={() => setPage(Math.min(MAX_PAGE, Page + 1))}
                    className={cx('page', { allowed: Page === MAX_PAGE })}
                >
                    <IconBack />
                </Button>
            </div>
            <div className={cx('limit')}>
                <Search
                    value={value}
                    onChange={handleInputChange}
                    type="number"
                    focus
                    width="5rem"
                    height="2.6rem"
                    placeholder={Math.min(totalPages, MAX_PAGE) + ''}
                />
            </div>
            <Button text onClick={handlePageChange}>
                Start
            </Button>
        </div>
    );
};

function ShowList({ titleTable = [], Data = {}, PageStart = 1, setPage }) {
    const [Musics, setMusics] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const key = Object.keys(Data)[0];
        if (key) {
            const musicData = Data[key];
            setMusics(musicData[keyMusic] ?? []);
            setTotal(musicData[keyPage]?.total || 0);
            setTotalPages(musicData[keyPage]?.totalPages || 0);
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
                <Body ListMusic={Musics} />
            </table>
            <Footer totalPages={totalPages} total={total} Page={PageStart} setPage={setPage} />
        </div>
    );
}

export default ShowList;
