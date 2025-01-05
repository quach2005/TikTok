import classNames from 'classnames/bind';

import style from './DropOptions.module.scss';
import Tippy from '@tippyjs/react/headless';
import Wrapper from '../Popper/Wrapper';
import Button from '../Button';
const cx = classNames.bind(style);

function DropOptions({ placement = 'top', trigger = 'click', Options = [], children }) {
    const Render = () => {
        return Options.map((item, index) => {
            return (
                <label className={cx('menu')} key={index} htmlFor={item.name} >
                    {item.check && <input type="checkbox" className={cx("check-box")} id={item.name} />}
                    {item.name && <div>{item.name}</div>}
                    {item.btn &&
                        item.btn.map((btn) => {
                            if (btn.type === 'primary') {
                                return <Button key={btn.name} primary >{btn.name}</Button>
                            }
                            else if (btn.type === "rounded") {
                                return <Button key={btn.name} rounded >{btn.name}</Button>
                            }
                        })}
                </label>
            );
        });
    };
    return (
        <div className={cx('wrapper')}>
            <Tippy
                trigger={trigger}
                placement={placement}
                interactive
                allowHTML={false}
                render={(attr) => (
                    <div {...attr}>
                        <Wrapper className={cx('menu-item')}>{Render()}</Wrapper>
                    </div>
                )}
            >
                <div className={cx('children')}>{children}</div>
            </Tippy>
        </div>
    );
}

export default DropOptions;
