import classNames from 'classnames/bind';

import style from './Feedback.module.scss';
import Textarea from '~/components/Input';
import Button from '~/components/Button';
import { useState } from 'react';

const cx = classNames.bind(style);

const cards = [
    {
        title: 'Summary of feedback',
        maxLen: 100,
        note: '*',
        input: 'textarea',
    },
    {
        title: 'Your email',
        description:
            'Please leave your email in case we need to respond. The information shared will only be used to respond to your report.',
        height: 48,
        type : "email"
    },
    {
        title: 'Tell us more',
        description: 'Please provide as much detail as possible',
        maxLen: 1000,
        input: 'textarea',
        width: 864,
        height: 110,
    },
    {
        title: 'Attach screenshot',
        description:
            'You can upload up to 4 screenshots related to your feedback. Supported file types: JPEG, PNG, WEBP, GIF, TIFF, and HEIC',
        type: 'file',
    },
];
function Feedback() {
    let StatusAll = [];
    const [check, setCheck] = useState(false);
    const checkValue = (value, index) => {
        StatusAll[index] = value;
        setCheck(StatusAll.every(item => item.length !== 0));
        console.log(StatusAll);
    };

    const handleSubmit =()=>{
        alert("Feedback has been sent!");
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('context')}>
                <h2 className={cx('header')}>Share your feedback</h2>
                {cards.map((item, index) => (
                    <Textarea data={item} key={index} onChange={checkValue} index={index} />
                ))}
                <div className={cx({
                    "pointer":!check
                })}>
                    <Button
                        primary
                        className={cx('btn-send')}
                        disabled={!check}
                        onClick={handleSubmit}
                    >
                        {' '}
                        Send
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
