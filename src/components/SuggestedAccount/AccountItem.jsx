import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccount.module.scss';
import { PopperWrapper } from '../Popper';
import Image from '../img/Image';
import AccountPreview from './AccountPreview/AccountPreview';
const cx = classNames.bind(styles);


function AccountItem({data, didFollow}) {


    const renderPreview = (props) => {
        return (
            <div {...props} tabIndex='-1' className={cx('preview')}>
                <PopperWrapper>
                    <AccountPreview data={data} didFollow={didFollow}/>
                </PopperWrapper>
            </div>
        )
    }
    return ( 
        <div>
            <Tippy
                interactive
                placement='bottom-start'
                delay={[800, 0]}
                render={renderPreview}
                
            >
                <div className={cx('account-item-wrapper')}>
                    <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong className={cx('username')}>{data.nickname}</strong>
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </p>
                        <p className={cx('name')}>{data.first_name +" "+ data.last_name}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;