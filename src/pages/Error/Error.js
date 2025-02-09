import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '~/Context/CheckLogin'
import { IconPlay } from '~/components/Icons';
import Header from '~/Layout/components/Header';
import Image from '~/components/img';
import Button from '~/components/Button';
import config from '~/Config';
import Footer from '~/Layout/components/Footer';


import styles from './Error.module.scss';
const cx = classNames.bind(styles);


function Error() {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext);
    const [error, setError] = useState(true);

    useEffect(() => {
        const time = setTimeout(() => {
            setError(false);
        }, 1000)
        navigate('/404')
        return () => {
            clearTimeout(time);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (error) {
        return <></>
    }

    return (
        <div className={cx('wrapper')}>
            <Header currentUser={user} />
            <div className={cx("container")}>
                <div className={cx('notfound')}>
                    <span>4</span>
                    <Image src={'https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/site/static/webapp-static-site/bbad6f99219877ac47f9.png'} alt="Not Found" />
                    <span>4</span>

                </div>
                <p>This page could not be found</p>
                <h2>See more trending videos on TikTok</h2>
                <NavLink to={config.routes.home}> <Button primary iconLeft={<IconPlay />}>Watch Now</Button></NavLink>
            </div>
            <Footer />
        </div>
    );
}

export default Error;