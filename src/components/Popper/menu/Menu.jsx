import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import { PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';

const cx = classNames.bind(styles);

function Menu({ children, items = [],hideOnClick = false, onChange, handleLogout, delay = [0,700] }) {
    // menu
    const [menu, setMenu] = useState(items);

    // title
    const [title, setTitle] = useState('English');

    // history
    const [history, setHistory] = useState([{ data: menu }]);
    const current = history[history.length - 1];
    
    useEffect(() => {
        setMenu(items);
        setHistory([{ data: menu }]);
    }, [items, menu]);

    const handleSubMenu = (item) => {
        setHistory((prev) => [...prev, item.children]);
        
    };
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };


    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    title={title}
                    data={item}
                    key={index}
                    onClick={() => {
                        if (isParent) {
                            handleSubMenu(item);
                        } else {
                            onChange(item);
                            if (item.title === 'Log out') {
                                handleLogout();
                            } else if (item.type === "language") {
                                setTitle(item.title);
                                handleBack(); 
                            }
                        }
                    }}
                />
            );
        });
    };

    const handleResetMenu = () => {
        setHistory(prev => prev.slice(0, 1));
    }

    return (
        <div>
            <Tippy
                hideOnClick={hideOnClick}
                offset={[12, 8] }
                interactive
                placement="bottom-end"
                delay={delay}
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs} className={cx('menu-list')}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {history.length > 1 && (
                                <HeaderMenu
                                    title={"Language"}
                                    onBack={handleBack}
                                />
                            )}
                            <div className={cx('menu-body')}>
                                {renderItems()}
                            </div>
                        </PopperWrapper>
                    </div>
                )}
                onHidden={handleResetMenu}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Menu;
