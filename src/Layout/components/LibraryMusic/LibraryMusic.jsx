import classNames from 'classnames/bind';

import style from './LibraryMusic.module.scss';
import { useEffect, useState } from 'react';
import Search from '~/components/Search/Search';
import ShowList from '~/components/ShowList/ShowList';
import { getPopularMusic } from '~/services/Get-music';
import Options from './OptionsMusic';
const cx = classNames.bind(style);

const titleTable = [
    { title: 'Sound' },
    { title: 'Topic', width: '145px' },
    { title: 'Style', width: '145px' },
    { title: 'Duration', width: '145px' },
    { title: 'Language', width: '145px' },
    { title: 'Act', width: '145px' },
];
let Limit = 8;
function LibraryMusic() {
    const [ListMusic, setListMusic] = useState([]);
    const [Page, setPage] = useState(1);

    const getPage = (value) => {
        setPage(value);
    };

    useEffect(() => {
        console.warn('This API does not support music playback, we will update in the near future! Thank you');
        getPopularMusic(Page, Limit)
            .then((res) => {
                setListMusic(res);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => console.log('End!'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Page]);

    return (
        <div>
            <h3>Library</h3>
            <div className={cx('library-search-container')}>
                <Options />
                <div className={cx('search')}>
                    <Search focus width={'276px'} height={'3rem'} placeholder={'Press enter to search'} icon />
                </div>
            </div>
            <ShowList setPage={getPage} titleTable={titleTable} Data={ListMusic} PageStart={Page} />
        </div>
    );
}

export default LibraryMusic;
