import classNames from "classnames/bind";


import style from './Upload.module.scss'
import SidebarUpload from "~/Layout/components/SidebarUpload";

const cx = classNames.bind(style);

function Upload({children}) {
    
    return (
        <div className={cx("wrapper")}>
            <SidebarUpload/>
            {children}
        </div>
    )
}

export default Upload;