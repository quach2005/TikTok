import classNames from 'classnames/bind';

import style from './Post.module.scss';
import Search from '~/components/Search';
import DropMenu from '~/components/DropMenu';
import { IconBack, IconExclamation } from '~/components/Icons';
import DropOptions from '~/components/DropOptions';
import Tippy from '@tippyjs/react';
const cx = classNames.bind(style);
const SortBy = [{ title: 'Posting time' }, { title: 'Video Views' }, { title: 'Comment' }, { title: 'Likes' }];

const all_video_views = [
    { name: '<1k', check: true },
    { name: '1K-10K', check: true },
    { name: '10K-100K', check: true },
    { name: '>100K', check: true },
    {
        btn: [
            {
                type: 'checkbox',
                name: 'ALL video views',
            },
            {
                type: 'primary',
                name: 'Apply',
            },
        ],
    },
];
const all_comments = [
    { name: '<1k', check: true },
    { name: '1K-10K', check: true },
    { name: '10K-100K', check: true },
    { name: '>100K', check: true },
    {
        btn: [
            {
                type: 'checkbox',
                name: 'ALL comments',
            },
            {
                type: 'primary',
                name: 'Apply',
            },
        ],
    },
];

const all_likes = [
    { name: '<1k', check: true },
    { name: '1K-10K', check: true },
    { name: '10K-100K', check: true },
    { name: '>100K', check: true },
    {
        btn: [
            {
                type: 'checkbox',
                name: 'ALL Likes',
            },
            {
                type: 'primary',
                name: 'Apply',
            },
        ],
    },
];

const all_privacy = [
    { name: 'Everybody', check: true },
    { name: 'Just me', check: true },
    { name: 'Friend', check: true },
    {
        btn: [
            {
                type: 'checkbox',
                name: 'ALL privacy',
            },
            {
                type: 'primary',
                name: 'Apply',
            },
        ],
    },
];
const Filters = {
    'All video views': all_video_views,
    'All comments': all_comments,
    'All Likes': all_likes,
    'All privacy': all_privacy,
};

function Post() {
    return (
        <div className={cx('wrapper')}>
            <h2>Manage your posts</h2>
            <Search icon focus height="3.5rem" placeholder="Search post description" />
            <div className={cx('options')}>
                <DropMenu menus={SortBy} iconRight={<IconBack />} />
                {Object.keys(Filters).map((key, index) => (
                    <DropOptions
                        title={key}
                        Options={Filters[key]}
                        key={index}
                        placement="bottom"
                        iconRight={<IconBack />}
                        change_icon={false}
                    />
                ))}
            </div>

            <table>
                <thead>
                    <tr>
                        <th>
                            <div>
                                Content{' '}
                                <Tippy 
                                    content="Video view, like and comment data is not updated in real time"
                                    interactive
                                    placement='bottom'
                                    className={cx('tippy-box')}
                                >
                                    <div>
                                        <IconExclamation />
                                    </div>
                                </Tippy>
                            </div>
                        </th>
                        <th>
                            <div>Posting</div>
                        </th>
                        <th>
                            <div>Privacy</div>
                        </th>
                        <th>
                            <div>Act</div>
                        </th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    );
}

export default Post;
