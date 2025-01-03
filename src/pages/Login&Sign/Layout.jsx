import classNames from 'classnames/bind';

import style from './Layout.module.scss';
import Button from '~/components/Button';
import { IconDelete } from '~/components/Icons';
import { IconApple, IconFacebook, IconGoogle, IconKaKaoTalk, IconLine, IconProfile, IconQR } from '~/components/Icons';
import LoginAndSign from './Login';
import { useContext, useState } from 'react';
import { AuthContext } from '~/AuthContext/AuthContext';


const cx = classNames.bind(style);

const SignMenus = [
    {
        title: 'Sign up TikTok',
        data: [
            {
                icon: <IconProfile width="20" height="20" />,
                title: 'Use phone number or email',
            },
            {
                icon: <IconFacebook width="20" height="20" />,
                title: 'Continue with Facebook',
            },
            {
                icon: <IconGoogle width="20" height="20" />,
                title: 'Continue with Google',
            },
            {
                icon: <IconLine width="20" height="20" />,
                title: 'Continue with Line',
            },
            {
                icon: <IconKaKaoTalk width="20" height="20" />,
                title: 'Continue with KakaoTalk',
            },
            {
                icon: <IconApple width="20" height="20" />,
                title: 'Continue with Apple',
            },
        ],
    },
];

const handleLoginMenus = SignMenus[0].data.map((menu) => ({ ...menu }));
handleLoginMenus.forEach((menu) => {
    if (menu.title === 'Use phone number or email') {
        menu.fontSize = '1.5rem';
        menu.title = 'Use phone number/email/username';
        menu.data = [
            {

            }
        ]
    }
});



const LoginMenus = [
    {
        title: 'Login in to TikTok',
        data: [
            {
                icon: <IconQR width="20" height="20" />,
                title: 'Use QR code',
            },
            ...handleLoginMenus
        ],
    },
];

function SignAndLogin() {
    const [ChangeLoginOrSign, setChangeLoginOrSign] = useState(true);

    const {handlePassedLogin} = useContext(AuthContext);

    const getForm = (data)=>{
        console.log(data);
        
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {ChangeLoginOrSign && <LoginAndSign menus={LoginMenus} getForm={getForm} />}
                {!ChangeLoginOrSign && <LoginAndSign menus={SignMenus} getForm={getForm} />}

                <p className={cx('policy')}>
                    By continuing to work with an account located in <span className={cx('key-work')}>Vietnam</span>,
                    you agree to the <span className={cx('key-work')}>Control Services</span>, and acknowledge that you
                    have read <span className={cx('key-work')}>our Privacy Policy</span>.
                </p>
                <div className={cx('footer')}>
                    <p>{ChangeLoginOrSign?"Don't you have an account?":"Already have an account?"}</p>
                    <Button text className={cx('btn-change')} onClick={() => setChangeLoginOrSign(!ChangeLoginOrSign)}>
                        {ChangeLoginOrSign?"Register":"Log in"}
                    </Button>
                </div>
                <Button className={cx('btn-close')} onClick={handlePassedLogin} >
                    <IconDelete width={'2.55rem'} height={'2.55rem'} className={cx('btn')} />
                </Button>
                <br />
            </div>
        </div>
    );
}

export default SignAndLogin;
