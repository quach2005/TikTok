/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import style from './DropMenu.module.scss';
import { useEffect, useState } from 'react';
import Button from '../Button';
import Wrapper from '../Popper/Wrapper';
import { IconChecked } from '../Icons';

const cx = classNames.bind(style);

function DropMenu({
    menus = [],
    className,
    selected_dot = false,
    iconRight,
    iconLeft,
    title,
    onChange = () => {},
    onClick = () => {},
    description,
}) {
    const getValueMenuChecked = JSON.parse(localStorage.getItem('menu-checked' + title));
    const [menu, setMenu] = useState(getValueMenuChecked ?? menus[0]);
    const [visible, setVisible] = useState(false);
    const handleToggle = () => {
        setVisible((preview) => !preview);
        onClick("SortBy");
    };

    const handleHide = () => {
        onChange(menu.title);
        setVisible(false);
    };

    const handleMenu = (menu) => {
        setMenu(menu);
        localStorage.setItem('menu-checked' + title, JSON.stringify(menu));
    };

    useEffect(() => {
        return () => {
            setMenu(menus[0] ?? null);
        };
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Tippy
                zIndex={1}
                visible={visible}
                offset={[0, 10]}
                placement="bottom-start"
                interactive
                onClickOutside={handleHide}
                render={(attrs) => (
                    <div {...attrs} tabIndex={-1}>
                        <Wrapper className={cx('menu-item')}>
                            {menus.map((item, index) => (
                                <div
                                    key={index}
                                    className={cx('item')}
                                    onClick={() => {
                                        handleMenu(item);
                                        handleHide();
                                    }}
                                >
                                    <Button
                                        className={cx({
                                            check: menu.title === item.title,
                                        })}
                                    >
                                        {item.title}
                                    </Button>
                                    {menu.title === item.title && <IconChecked />}
                                </div>
                            ))}
                        </Wrapper>
                    </div>
                )}
            >
                <div className={cx('menu-checked')} onClick={handleToggle}>
                    {description}

                    <Button
                        iconLeft={iconLeft}
                        iconRight={iconRight}
                        rounded
                        className={cx(className, {
                            'change-icon': selected_dot && menu.title !== menus[0].title,
                        })}
                    >
                        {menu.title}
                    </Button>
                </div>
            </Tippy>
        </div>
    );
}

export default DropMenu;
