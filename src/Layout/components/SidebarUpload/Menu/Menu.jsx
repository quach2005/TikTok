import classNames from 'classnames/bind';

import style from './Menu.module.scss';
import MenuItem from '~/components/Popper/menu/MenuItem';
import {
    IconBook,
    IconComment,
    IconData,
    IconHome,
    IconLightbulb,
    IconMail,
    IconMusic,
    IconPost,
} from '~/components/Icons';

const cx = classNames.bind(style);
const menu = [
    {
        title: 'Manage',
        data: [
            {
                icon: <IconHome width="2rem" height="2rem" />,
                title: 'Home',
            },
            {
                icon: <IconPost width="1.8rem" height="1.8rem" />,
                title: 'Post',
            },
            {
                icon: <IconData width="1.8rem" height="1.8rem" />,
                title: 'Analysis',
            },
            {
                icon: <IconComment width="1.8rem" height="1.8rem" />,
                title: 'Comment',
            }
        ],
    },
    {
        title: 'Tools',
        data: [
            {
                icon: <IconLightbulb width="1.8rem" height="1.8rem" />,
                title: 'Inspiration',
            },
            {
                icon: <IconBook width="1.8rem" height="1.8rem" />,
                title: 'Creator Academy',
            },
            {
                icon: <IconMusic width="1.8rem" height="1.8rem" />,
                title: 'Unlimited Sound',
            },
        ],
    },
    {
        title: 'Other',
        data: [
            {
                icon: <IconMail width="1.8rem" height="1.8rem" />,
                title: 'Feedback',
            },
        ],
    },
];

function Menu() {
    return (
        <div className={cx('wrapper')}>
            {menu.map((item) => (
                <div key={item.title} className={cx("menu-wrapper")}>
                    <div className={cx('title')}>{item.title}</div>
                    {item.data.map((item, index) => (
                        <div key={index}>
                            <MenuItem data={item} className={cx('menu-item')} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Menu;
