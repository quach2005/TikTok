import classNames from "classnames/bind";
import style from './AccountsItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style)
function AccountsItem() {
    return (
        <div className={cx('wrapper')}>
            <img src="https://images2.thanhnien.vn/528068263637045248/2023/4/23/edit-truc-anh-16822518118551137084698.png" alt="Hoa" className={cx('avt')} />
            <div className={cx("info")}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountsItem;