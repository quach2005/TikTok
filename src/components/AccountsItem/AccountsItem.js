import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types'

import style from './AccountsItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from '~/components/img'

const cx = classNames.bind(style)
function AccountsItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image
                src={data.avatar}
                alt={data.full_name}
                className={cx('avt')}
            />
            <div className={cx("info")}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />}
                </h4>
                <span className={cx('username')}>@{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountsItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default AccountsItem;