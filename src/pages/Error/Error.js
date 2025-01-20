import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';

// Image
import Microsort from "~/assets/images/Microsort.png"

import { AuthContext } from '~/Context/CheckLogin'
import styles from './Error.module.scss';
import Header from '~/Layout/components/Header';
import Image from '~/components/img';
import Button from '~/components/Button';
import { IconLogoTikTok, IconPlay, IconQR } from '~/components/Icons';
import config from '~/Config';


const cx = classNames.bind(styles);


const languages = [
    { name: "English", code: "en" },
    { name: "Vietnamese", code: "vi" },
    { name: "French", code: "fr" },
    { name: "Spanish", code: "es" },
    { name: "Chinese (Simplified)", code: "zh" },
    { name: "Japanese", code: "ja" },
    { name: "Korean", code: "ko" },
    { name: "German", code: "de" },
    { name: "Italian", code: "it" },
    { name: "Portuguese", code: "pt" },
    { name: "Russian", code: "ru" },
    { name: "Arabic", code: "ar" },
    { name: "Hindi", code: "hi" },
    { name: "Bengali", code: "bn" },
    { name: "Urdu", code: "ur" },
    { name: "Thai", code: "th" },
    { name: "Malay", code: "ms" },
    { name: "Dutch", code: "nl" },
    { name: "Greek", code: "el" },
    { name: "Turkish", code: "tr" },
    { name: "Swedish", code: "sv" },
    { name: "Norwegian", code: "no" },
    { name: "Danish", code: "da" },
    { name: "Finnish", code: "fi" },
    { name: "Polish", code: "pl" },
    { name: "Czech", code: "cs" },
    { name: "Hungarian", code: "hu" },
    { name: "Romanian", code: "ro" },
    { name: "Bulgarian", code: "bg" },
    { name: "Croatian", code: "hr" },
    { name: "Slovak", code: "sk" },
    { name: "Serbian", code: "sr" },
    { name: "Hebrew", code: "he" },
    { name: "Persian", code: "fa" },
    { name: "Indonesian", code: "id" },
    { name: "Tagalog", code: "tl" },
    { name: "Swahili", code: "sw" },
    { name: "Zulu", code: "zu" },
];

const Footer = () => (
    <div className={cx("wrapper-footer")}>
        <div className={cx("title")}> <h2>Download now</h2></div>
        <div className={cx("download-on-app")}>
            <div>
                <IconQR width={"2rem"} height={"2rem"} />
                QR CODE
            </div>
            <div>
                <Image src={Microsort} />
            </div>
            <div className={cx("Apple")}></div>
            <div className={cx("Amazon")}></div>
            <div className={cx("gg-play")}></div>
        </div>
        <div className={cx("footer")}>
            <NavLink to={config.routes.home}> <IconLogoTikTok /></NavLink>
            <div>
                <h4>Company</h4>
                <ul>
                    <li>About</li>
                    <li>Newsroom</li>
                    <li>Contact</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div>
                <h4>Programs</h4>
                <ul>
                    <li>TikTok for Good</li>
                    <li>Advertise</li>
                    <li>TikTok Live Creator Networks</li>
                    <li>Developers</li>
                    <li>Transarency</li>
                    <li>TikTok Rewards</li>
                    <li>TikTok Embeds</li>

                </ul>
            </div>
            <div>
                <h4>Support</h4>
                <ul>
                    <li>Help Center</li>
                    <li>Sefety Canter</li>
                    <li>Privacy Center</li>
                    <li>Creator Protal</li>
                    <li>Community Guidelines</li>
                    <li>Transarency</li>
                    <li>Accessibility</li>
                </ul>
            </div>
            <div>
                <h4>Legal</h4>
                <ul>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
        <div className={cx("language-and-copy-right")}>
            <select defaultValue={"vi"}>
                {languages.map((language, index) => (
                    <option key={index} value={language.code}>{language.name}</option>
                ))}
            </select>
            <div>
                © 2025 TikTok
            </div>
        </div>
    </div>
)
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