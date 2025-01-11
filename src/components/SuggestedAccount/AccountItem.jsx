import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccount.module.scss';
import { PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import ItemProfile from '../ItemProfile';
const cx = classNames.bind(styles);

function AccountItem({ data, didFollow }) {
    const renderPreview = (props) => {
        return (
            <div {...props} tabIndex="-1" className={cx('preview')}>
                <PopperWrapper>
                    <AccountPreview data={data} didFollow={didFollow} />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive placement="bottom-start" delay={[800, 0]} render={renderPreview}>
                <div className={cx('user')}>
                    <ItemProfile
                        img={data.avatar}
                        alt={data.nickname}
                        title={data.nickname}
                        tick={data.tick}
                        description={data.first_name + ' ' + data.last_name}
                    />
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
