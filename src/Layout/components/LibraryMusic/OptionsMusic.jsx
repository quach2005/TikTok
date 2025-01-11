import classNames from 'classnames/bind';

import style from './LibraryMusic.module.scss';
import DropOptions from '~/components/DropOptions';
import Button from '~/components/Button';
import { IconBack } from '~/components/Icons';
import DropMenu from '~/components/DropMenu';
import { useState } from 'react';

const cx = classNames.bind(style);

const Topics = [
    { name: 'Dancing', check: true },
    { name: 'Spring', check: true },
    { name: 'Summer', check: true },
    { name: 'Autumn', check: true },
    { name: 'Winter', check: true },
    { name: 'Sport', check: true },
    { name: 'Tourism', check: true },
    { name: 'Sound effects', check: true },
    { name: 'Meditation', check: true },
    { name: 'Game', check: true },
    { name: 'Love', check: true },
    { name: 'Evening', check: true },
    { name: 'Good', check: true },
    { name: 'Cuisine', check: true },
    { name: 'Pets', check: true },
    { name: 'Transition', check: true },
    { name: 'Vlog', check: true },
    { name: 'Other', check: true },
    {
        btn: [
            {
                type: 'checkbox',
                name: 'All',
            },
            {
                type: 'primary',
                name: 'Apply',
            },
        ],
    },
];

const Style = [
    { name: 'Electronics', check: true },
    { name: 'Easy to listen to', check: true },
    { name: 'Hip Hop/Rap', check: true },
    { name: 'Pop', check: true },
    { name: 'Rock', check: true },
    { name: 'Latin', check: true },
    { name: 'Folk', check: true },
    { name: 'R&B/Soul', check: true },
    { name: 'Classic', check: true },
    { name: 'Chinese style', check: true },
    { name: 'Reggae', check: true },
    { name: 'Experience', check: true },
    { name: 'Nation', check: true },
    { name: 'Jazz', check: true },
    { name: 'Other', check: true },
    {
        btn: [
            {
                type: 'checkbox',
                name: 'All',
            },
            {
                type: 'primary',
                name: 'Apply',
            },
        ],
    },
];

const Duration = [
    { name: '0-1 minute', check: true },
    { name: '1-3 minutes', check: true },
    { name: '3-5 minutes', check: true },
    { name: '5-10 minutes', check: true },
    { name: '10-30 minutes', check: true },
    { name: 'Other', check: true },
    {
        btn: [
            {
                type: 'checkbox',
                name: 'All',
            },
            {
                type: 'primary',
                name: 'Apply',
            },
        ],
    },
];

const Filters = {
    Topic: Topics,
    Style: Style,
    Duration: Duration,
};

const SortBy = [
    {
        title: 'Most popular',
    },
    {
        title: 'New',
    },
];

function Options() {
    const [activeFilter, setActiveFilter] = useState(null);

    const handleClickOutside = (value) => {
        if (value === 'SortBy') {
            setActiveFilter((preview) => (preview === value ? null : value));
        } else if (Filters.hasOwnProperty(value)) {
            setActiveFilter((preview) => (preview === value ? null : value));
        } else {
            setActiveFilter(null);
        }
    };
    return (
        <div className={cx('options')}>
            {Object.keys(Filters).map((filterKey) => (
                <DropOptions
                    key={filterKey}
                    title={filterKey}
                    Options={Filters[filterKey]}
                    placement="bottom-start"
                    change_icon={false}
                    onChange={handleClickOutside}
                >
                    <Button
                        rounded
                        iconRight={<IconBack />}
                        className={cx('btn', { active: activeFilter === filterKey })}
                        onClick={() => handleClickOutside(filterKey)}
                    >
                        {filterKey}
                    </Button>
                </DropOptions>
            ))}
            <div className={cx('sort-by')}>
                <DropMenu
                    menus={SortBy}
                    description="Sort by&nbsp;"
                    onChange={handleClickOutside}
                    onClick={handleClickOutside}
                    iconRight={<IconBack />}
                    className={cx('icon-back', 'btn', { active: activeFilter === 'SortBy' })}
                />
            </div>
        </div>
    );
}

export default Options;