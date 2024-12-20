import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './SuggestedAccount.module.scss';
import AccountItem from './AccountItem';
const cx = classNames.bind(styles);

function SuggestedAccounts({ label, data = [], onSeeAll, onSeeLess, index, didFollow = false }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((account) => {
                return <AccountItem data={account} key={account.id} didFollow={didFollow} />;
            })}

            <p className={cx('more-btn')} onClick={index <= 5 ? ()=> onSeeAll(didFollow) : ()=> onSeeLess(didFollow)}>
                {index <= 5 ? 'See All' : 'See Less'}
            </p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
    onSeeAll: PropTypes.func,
    onSeeLess: PropTypes.func,
};

export default SuggestedAccounts;
