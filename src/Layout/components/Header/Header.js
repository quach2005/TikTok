import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import "tippy.js/dist/tippy.css";
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';


import Menu from '~/components/Popper/menu';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import { IconMessage, IconSend, IconUpload } from '~/components/Icons';
import Image from '~/components/img';
import Search from '../Search/Search';
import config from '~/Config';
import { AuthContext } from '~/AuthContext/AuthContext';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title_language: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    title: 'English',
                    code: 'en'
                },
                {
                    type: 'language',
                    title: 'Vietnamese',
                    code: 'vi'
                }
                ,
                {
                    type: 'language',
                    title: 'Japanese',
                    code: 'ja'
                },
                {
                    type: 'language',
                    title: 'Korean',
                    code: 'ko'
                }
                ,
                {
                    type: 'language',
                    title: 'French',
                    code: 'fr'
                },
                {
                    type: 'language',
                    title: 'Spanish',
                    code: 'es'
                },
                {
                    type: 'language',
                    title: 'German',
                    code: 'de'
                },
                {
                    type: 'language',
                    title: 'Italian',
                    code: 'it'
                },
                {
                    type: 'language',
                    title: 'Portuguese',
                    code: 'pt'
                },
                {
                    type: 'language',
                    title: 'Russian',
                    code: 'ru'
                },
                {
                    type: 'language',
                    title: 'Chinese',
                    code: 'zh'
                },
                {
                    type: 'language',
                    title: 'Arabic',
                    code: 'ar'
                },
                {
                    type: 'language',
                    title: 'Hindi',
                    code: 'hi'
                },
                {
                    type: 'language',
                    title: 'Turkish',
                    code: 'tr'
                },
                {
                    type: 'language',
                    title: 'Dutch',
                    code: 'nl'
                },
                {
                    type: 'language',
                    title: 'Polish',
                    code: 'pl'
                },
                {
                    type: 'language',
                    title: 'Thai',
                    code: 'th'
                },
                {
                    type: 'language',
                    title: 'Swedish',
                    code: 'sv'
                },
                {
                    type: 'language',
                    title: 'Danish',
                    code: 'da'
                },
                {
                    type: 'language',
                    title: 'Finnish',
                    code: 'fi'
                },
                {
                    type: 'language',
                    title: 'Greek',
                    code: 'el'
                },
                {
                    type: 'language',
                    title: 'Hebrew',
                    code: 'he'
                },
                {
                    type: 'language',
                    title: 'Indonesian',
                    code: 'id'
                },
                {
                    type: 'language',
                    title: 'Malaysian',
                    code: 'ms'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    }
]

const useMenu = [
    {
        title: 'View profile',
        icon: <FontAwesomeIcon icon={faUser} />,
        to: '/@me',
    },
    {
        title: 'Get coins   ',
        icon: <FontAwesomeIcon icon={faCoins} />,
        to: '/get-coins',
    },
    {
        title: 'Settings',
        icon: <FontAwesomeIcon icon={faGear} />,
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        title: 'Log out',
        icon: <FontAwesomeIcon icon={faSignOut} />,
    },
]

const cx = classNames.bind(styles);
function Header({ currentUser }) {
    // handle login
    const { handleLogin } = useContext(AuthContext);
    // handle logout
    const { handleLogout } = useContext(AuthContext);

    const [menu, setMenu] = useState(() => {
        if (currentUser) {
            return useMenu;
        }
        return MENU_ITEMS;
    });
    // handle logic when click on menu item
    const handleChange = (result) => {
        if (result.type === 'language') {
            console.log(result);
        }
    }

    const logout = () => {
        handleLogout();
    }

    const login = () => {
        handleLogin();
    }

    useEffect(() => {
        setMenu(currentUser ? useMenu : MENU_ITEMS);
    }, [currentUser]);


    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tik tok" />
                </Link>

                {/* search */}
                <Search />

                {/* actions */}
                <div className={cx('actions')}>
                    {!currentUser ? (
                        <>
                            <Link to={config.routes.upload}><Button text >Upload</Button></Link>
                            <Button primary onClick={login} >Log In</Button>
                        </>
                    ) : (
                        <>
                            <Tippy
                                appendTo={document.body}
                                hideOnClick={false}
                                interactive
                                content="Upload video"
                                placement='bottom'
                            >
                                <Link to={config.routes.upload} className={cx('action-btn')}>
                                    <IconUpload />
                                </Link>
                            </Tippy>

                            <Tippy
                                appendTo={document.body}
                                hideOnClick={false}
                                interactive
                                content="Message"
                                placement='bottom'
                            >
                                <button className={cx('action-btn')}>
                                    <IconSend />
                                </button>
                            </Tippy>

                            <Tippy
                                appendTo={document.body}
                                hideOnClick={false}
                                interactive
                                content="Inbox"
                                placement='bottom'
                            >
                                <button className={cx('action-btn')}>
                                    <IconMessage />
                                </button>
                            </Tippy>
                        </>

                    )}
                    <Menu
                        handleLogout={logout}
                        items={menu}
                        onChange={handleChange}
                    >
                        {!currentUser ? (
                            <button className={cx('more-btn')}><FontAwesomeIcon icon={faEllipsisVertical} /></button>
                        ) : (
                            <Image
                                src="https://i.pinimg.com/564x/dd/2d/0a/dd2d0a59ad7e79453110b2968af72d89.jpg"
                                alt="avatar"
                                fallback="https://i.pinimg.com/236x/cd/cb/0c/cdcb0cb30bc700c53f12eff840156b29.jpg"
                                className={cx('current-user-avatar')}
                            />
                        )}
                    </Menu>
                </div>
            </div>
        </header >
    );
}

export default Header;
