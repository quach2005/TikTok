import classNames from 'classnames/bind';

import style from './Comment.module.scss';
import { IconSearch } from '~/components/Icons';
import DropMenu from '~/components/DropMenu';
const cx = classNames.bind(style);

const Menus = [
    {
        titles: [{ title: 'All comments' }, { title: 'No answer yet' }, { title: 'Answered' }],
    },
    {
        titles: [{ title: 'Posted by all' }, { title: 'Posted by follower' }, { title: 'Posted by non-follower' }],
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
                <div className={cx('menu-drop')}>
                    {Menus.map((menu_item, index) => (
                        <DropMenu menus={menu_item.titles} key={index} index={index} className={cx('menu-item')} />
                    ))}
                </div>
                <div className={cx('search')}>
                    <IconSearch className={cx('icon')} />
                    <input type="text" placeholder="Search for comments of usernames" />
                </div>
            </div>
            <div className={cx('body')}>
                <div className={cx('content')}>
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
