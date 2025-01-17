/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';

import style from './DropOptions.module.scss';
import Tippy from '@tippyjs/react/headless';
import Wrapper from '../Popper/Wrapper';
import Button from '../Button';
import { useEffect, useRef, useState } from 'react';
const cx = classNames.bind(style);

function DropOptions({
    onChange = () => {},
    placement = 'auto',
    Options = [],
    className,
    iconLeft,
    iconRight,
    title,
    change_icon = true,
    children,
}) {
    const refDropOptions = useRef([]);
    const refCheckAll = useRef(null);
    const [visible, setVisible] = useState(false);
    const [stateOption, setStateOption] = useState(false);

    const handleShowMenu = () => {
        setVisible(!visible);
    };

    const handleApplyCheckBox = () => {
        const checkboxStates = refDropOptions.current.map((checkbox) => (checkbox ? checkbox.checked : false));
        localStorage.setItem(`Checkboxs_Apply${title}`, JSON.stringify(checkboxStates));
        if (refCheckAll.current) {
            const checkAll = refCheckAll.current.checked;
            localStorage.setItem(`Checkboxs_Apply_All${title}`, JSON.stringify(checkAll));
        }

        setStateOption(true);
        onChange();
    };

    const handleCheckAll = () => {
        if (refCheckAll.current) {
            refDropOptions.current.forEach((ref) => (ref.checked = refCheckAll.current.checked));
        }
    };

    const handleClickOutSide = () => {
        const savedStates = JSON.parse(localStorage.getItem(`Checkboxs_Apply${title}`));
        if (savedStates !== null) {
            savedStates.map((state, index) => {
                if (refDropOptions.current[index]) {
                    refDropOptions.current[index].checked = state;
                }
            });
        } else {
            refDropOptions.current.forEach((ref) => (ref.checked = false));
        }

        const stateCheckAll = JSON.parse(localStorage.getItem(`Checkboxs_Apply_All${title}`));
        if (refCheckAll.current) {
            refCheckAll.current.checked = stateCheckAll ? stateCheckAll : false;
        }
        handleShowMenu();
        onChange();
    };

    const getStatusAllRefOptions = () => {
        const stateAllRefOptions = refDropOptions.current.every((ref) => ref.checked === true);
        if (refCheckAll.current) refCheckAll.current.checked = stateAllRefOptions;
    };

    const handleResetCheckBox = () => {
        setStateOption(false);
        refDropOptions.current.forEach((ref) => (ref.checked = false));
        localStorage.removeItem(`Checkboxs_Apply${title}`);
        if (refCheckAll.current) {
            refCheckAll.current.checked = false;
            localStorage.removeItem(`Checkboxs_Apply_All${title}`);
        }
        onChange();
    };

    useEffect(() => {
        const savedStates = JSON.parse(localStorage.getItem(`Checkboxs_Apply${title}`));
        const stateCheckAll = JSON.parse(localStorage.getItem(`Checkboxs_Apply_All${title}`));
        const awaiTime = setTimeout(() => {
            if (stateCheckAll) {
                if (refCheckAll.current) {
                    refCheckAll.current.checked = stateCheckAll ? stateCheckAll : false;
                }
            }
            if (savedStates !== null) {
                setStateOption(true);
                savedStates.map((state, index) => {
                    if (refDropOptions.current[index]) {
                        refDropOptions.current[index].checked = state;
                    }
                });
            }
        }, 100);

        return () => {
            clearTimeout(awaiTime);
        };
    }, []);


    const Render = () => {
        return Options?.map((item, index) => {
            if (item.btn) {
                return;
            }
            return (
                <label className={cx('menu')} key={index} htmlFor={item.name} onClick={getStatusAllRefOptions}>
                    {item.check && (
                        <input
                            id={item.name}
                            type="checkbox"
                            className={cx('check-box')}
                            ref={(ref) => (refDropOptions.current[index] = ref)}
                        />
                    )}
                    {item.name && <div>{item.name}</div>}
                </label>
            );
        });
    };
    const footer = () => {
        return Options?.map((item, index) => {
            if (item.check) {
                return;
            }
            return (
                <div key={index} className={cx('footer-item')}>
                    {item.btn &&
                        item.btn.map((btn) => {
                            if (btn.type === 'primary') {
                                return (
                                    <Button
                                        key={btn.name}
                                        primary
                                        onClick={() => {
                                            handleApplyCheckBox();
                                            handleShowMenu();
                                        }}
                                    >
                                        {btn.name}
                                    </Button>
                                );
                            } else if (btn.type === 'rounded') {
                                return (
                                    <Button
                                        key={btn.name}
                                        rounded
                                        onClick={() => {
                                            handleResetCheckBox();
                                            handleShowMenu();
                                        }}
                                    >
                                        {btn.name}
                                    </Button>
                                );
                            } else if (btn.type === 'checkbox') {
                                return (
                                    <div className={cx('check-all')} onClick={handleCheckAll} key={btn.name}>
                                        <input
                                            type="checkbox"
                                            id="checkall"
                                            className={cx('check-box')}
                                            ref={refCheckAll}
                                        />
                                        <label htmlFor="checkall">{btn.name}</label>
                                    </div>
                                );
                            }
                        })}
                </div>
            );
        });
    };

    return (
        <div className={cx('wrapper')}>
            <Tippy
                offset={[0,3]}
                zIndex={1}
                visible={visible}
                placement={placement}
                interactive
                allowHTML={false}
                onClickOutside={handleClickOutSide}
                render={(attr) => (
                    <div
                        {...attr}
                        className={cx('tippy-box')}
                    >
                        <Wrapper className={cx('container')}>
                            <div className={cx('menu-item')}>{Render()}</div>
                            {footer()}
                        </Wrapper>
                    </div>
                )}
            >
                <div className={cx('children')} onClick={handleShowMenu}>
                    {children ? (
                        children
                    ) : (
                        <Button
                            rounded
                            iconLeft={iconLeft}
                            iconRight={iconRight}
                            className={cx(className, {
                                'change-icon': change_icon && stateOption,
                            })}
                        >
                            {title??""}
                        </Button>
                    )}
                </div>
            </Tippy>
        </div>
    );
}

export default DropOptions;
