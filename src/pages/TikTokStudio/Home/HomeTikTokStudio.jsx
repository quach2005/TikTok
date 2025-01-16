import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import config from '~/Config';
import CardProfile from '~/components/CardProfile';
import View from '~/components/View';
import Button from '~/components/Button';
import { IconBack } from '~/components/Icons';
import Image from '~/components/img/Image';
import ImageComment from '~/assets/images/comment.svg';

import style from './HomeTikTokStudio.module.scss';
import Information from '~/components/Information';
const cx = classNames.bind(style);

const dataView = [
    {
        name: 'Video views',
        count: 0,
        tooltipText: 'The number of times viewers watched your videos during the selected date range.',
    },
    {
        name: 'Profile Views',
        count: 0,
        tooltipText: 'Number of times your profile was viewed within the selected date range.',
    },
    {
        name: 'Likes',
        count: 0,
        tooltipText: 'The number of likes your videos received during the selected date range.',
    },
    {
        name: 'Comment',
        count: 0,
        tooltipText: 'The number of comments your videos received during the selected date range.',
    },
    {
        name: 'Shares',
        count: 0,
        tooltipText: 'The number of shares your video received during the selected date range.',
    },
    { name: 'Only Viewer', count: 0, tooltipText: 'Number of people who viewed your video' },
];
const data_user = {
    avt: 'https://i.pinimg.com/564x/dd/2d/0a/dd2d0a59ad7e79453110b2968af72d89.jpg',
    name: '@PhamQuach2005',
    following_count: 0,
    follower_count: 0,
    likes_count: 0,
};
const information = {
    title: 'Information for you',
    icon: <IconBack />,
    href: 'https://www.tiktok.com/creator-academy',
    content: [
        {
            img: 'https://p16-ttark-ie.tiktokcdn-eu.com/tos-ie-i-2kojbpwjrs-ie/83a600de9aa8ef27204f2ee334eefdde.png~tplv-2kojbpwjrs-default:194:194:q50.image',
            title: 'Reward for effects creator',
            description: "Have you ever wondered what TikTok's Effect Creator Rewards are?",
        },
        {
            img: 'https://p16-ttark-ie.tiktokcdn-eu.com/tos-ie-i-2kojbpwjrs-ie/3e4bcf17a72b418eac7f808344424515~tplv-2kojbpwjrs-default:194:194:q50.image',
            title: 'Creator Rewards Program',
            description:
                "If you're passionate about creating long, high-quality TikTok videos and turning your creativity into rewards, we have a special program just for you: the Creator Rewards Program !",
        },
    ],
};
const recentPosts = {
    title: 'Recent Posts',
    icon: <IconBack />,
    to: '/tiktokstudio/content',
    content: [],
};

const KeyFigures = () => {
    return (
        <div className={cx('key-figures')}>
            <div className={cx('key-figures-header')}>
                <div className={cx('title')}>
                    <h2>Key figures</h2>
                    <p>Last 7 days</p>
                </div>
                <Button to={config.routes.analytics} iconRight={<IconBack />} text>
                    Show all
                </Button>
            </div>
            <div className={cx('view')}>
                {dataView.map((data) => (
                    <Tippy
                        
                        key={data.name}
                        appendTo={'parent'}
                        content={data.tooltipText}
                        placement="top"
                        className={cx('tippy-box')}
                        interactive
                    >
                        <div className={cx('view-item')}>
                            <View data={data} />
                        </div>
                    </Tippy>
                ))}
            </div>
        </div>
    );
};

const LatestComments = () => {
    return (
        <div className={cx('latest-comments')}>
            <h2>Latest Comments</h2>
            <div>
                <Image src={ImageComment} alt="comment" />
                <h2>No comments yet</h2>
                <p>Your latest comments will appear here.</p>
            </div>
        </div>
    );
};

const HomeTikTokStudio = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('card-left')}>
                <KeyFigures />
                <LatestComments />
            </div>
            <div className={cx('card-right')}>
                <CardProfile data_user={data_user} />
                <Information data={information} />
                <Information data={recentPosts} />
            </div>
        </div>
    );
};

export default HomeTikTokStudio;
