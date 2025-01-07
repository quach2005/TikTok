import classNames from 'classnames/bind';

import style from './Comment.module.scss';
import { IconFilter } from '~/components/Icons';
import DropMenu from '~/components/DropMenu';
import DropOptions from '~/components/DropOptions';
import Button from '~/components/Button';
import Search from '~/components/Search/Search';
const cx = classNames.bind(style);

const Menus = [
    {
        data: [{ title: 'All comments' }, { title: 'No answer yet' }, { title: 'Answered' }],
    },
    {
        data: [{ title: 'Posted by all' }, { title: 'Posted by follower' }, { title: 'Posted by non-follower' }],
    },
];

const Options = [
    {
        check: true,
        name: '<5 N',
    },
    {
        check: true,
        name: '5N-10N',
    },
    {
        check: true,
        name: '10K-100K',
    },
    {
        check: true,
        name: '>100K',
    },
    {
        btn: [
            {
                name: 'Erase',
                type: 'rounded',
            },
            {
                name: 'Apply',
                type: 'primary',
            },
        ],
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
                        <DropMenu menus={menu_item.data} key={index} index={index} className={cx('menu-item')} />
                    ))}
                    <DropOptions
                        placement="bottom-start"
                        Options={Options}
                        className={cx('menu-item')}
                        iconLeft={<IconFilter />}
                        title="Number of followers"
                    ></DropOptions>
                    <DropOptions placement="bottom-start" Options={[{ name: 'chua code' }]}>
                        <Button rounded iconLeft={<IconFilter />} className={cx('menu-item')}>
                            Comment date
                        </Button>
                    </DropOptions>
                </div>
                <Search placeholder={"Search for comments of usernames"} width={"36rem"} height={"3.6rem"} />
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

                <h2 className={cx('no-status')}>No comments yet</h2>
            </div>
        </div>
    );
}

export default Comment;
