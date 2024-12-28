import classNames from 'classnames/bind';

import style from './Comment.module.scss';
import { IconFilter, IconSearch } from '~/components/Icons';
import Button from '~/components/Button';
const cx = classNames.bind(style);

const ListMenu = [
    {
        title: 'All comments',
    },
    {
        title: 'Posted by all',
    },
    {
        title: 'Number of followers',
    },
    {
        title: 'Comment date',
    },
];

const EmptyState = [
    {
        width: '48px',
    },
    {
        width: '94px',
    },
    {
        width: '80px',
    },
];
function Comment() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('menu')}>
                    {ListMenu.map((item, index) => (
                        <Button key={index} iconLeft={<IconFilter />} className={cx('menu-item')}>
                            {item.title}
                        </Button>
                    ))}
                </div>
                <div className={cx('search')}>
                    <IconSearch className={cx('icon')} />
                    <input type="text" placeholder="Search for comments of usenames" />
                </div>
            </div>
            <div className={cx('body')}>
                <div className={cx('conten')}>
                    <div className={cx('components_EmptyState_AbsoluteCenter')}></div>

                    <div className={cx('components_EmptyState_AbsoluteCenter_3')}>
                        <div className={cx('components_EmptyState_div')}></div>
                        <div className={cx('components_EmptyState_FlexColumn')}>
                            {EmptyState.map((item, index) => (
                                <div key={index} style={{ width: item.width }} className={cx('item-EmptyState')}></div>
                            ))}
                        </div>
                    </div>
                </div>

                <h2 className={cx("no-status")}>No comments yet</h2>
            </div>
        </div>
    );
}

export default Comment;
