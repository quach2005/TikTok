import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import style from './DropMenu.module.scss';
import { useState } from 'react';
import Button from '../Button';
import Wrapper from '../Popper/Wrapper';
import { IconChecked, IconFilter } from '../Icons';

const cx = classNames.bind(style);

function DropMenu({ menus = [], className, index }) {
    const getValueMenuChecked = JSON.parse(localStorage.getItem('menu-checked' + index));
    const [menu, setMenu] = useState(getValueMenuChecked ?? menus[0]);
    const [visible, setVisible] = useState(false);

    const handleToggle = () => {
        setVisible((preview) => !preview);
    };

    const handleHide = () => {
        setVisible(false);
    };

    const handleMenu = (menu) => {
        setMenu(menu);
        localStorage.setItem('menu-checked' + index, JSON.stringify(menu));
    };

    return (
        <div className={cx('wrapper')}>
            <Tippy
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
                <div className={cx('menu-checked')}>
                    <Button
                        iconLeft={<IconFilter />}
                        rounded
                        className={cx(className, {
                            'change-icon': menu.title !== menus[0].title,
                        })}
                        onClick={handleToggle}
                    >
                        {menu.title}
                    </Button>
                </div>
            </Tippy>
        </div>
    );
}

export default DropMenu;
