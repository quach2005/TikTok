import classNames from 'classnames/bind';

import style from './Input.module.scss';
import { useEffect, useState } from 'react';
import { IconWaring } from '../Icons';
const cx = classNames.bind(style);

function Textarea({ data, onChange, index }) {
    const [text, settext] = useState('');
    const [Image, setImg] = useState(null);

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handlePreview = (e) => {
        const file = e.target.files[0];
        if (file) {
            file.preview = URL.createObjectURL(file);
            setImg(file);
        }
    };

    useEffect(() => {
        if (index === 4) {
            Image && onChange(Image.preview, index);
        } else {
            onChange(text, index);
        }
    }, [text, Image]);

    useEffect(() => {
        return () => {
            Image && URL.revokeObjectURL(Image.preview);
        };
    }, [Image]);

    let Comp = 'input';
    if (data.input) {
        Comp = data.input;
    }

    return (
        <div className={cx('wrapper')} style={{ width: data.width }}>
            <div className={cx('card')}>
                <h4 className={cx('title')}>
                    {data.title} <span style={{ color: 'red' }}>{data.note}</span>
                </h4>

                <p className={cx('description')}>{data.description}</p>

                <div
                    className={cx('input', {
                        'input-waring': text.length >= data.maxLen,
                        'input-waring-email': data.type === 'email' && !isValidEmail(text) && text.length > 0,
                    })}
                >
                    <Comp
                        type={data.type ?? 'text'}
                        style={{ height: data.height }}
                        name="input"
                        id=""
                        className={cx('textarea')}
                        value={text}
                        onChange={(e) => {
                            if (e.target.value.length <= data.maxLen) {
                                settext(e.target.value);
                            }
                            if (!data.maxLen) {
                                settext(e.target.value);
                            }
                            if (data.type === 'file') {
                                handlePreview(e);
                            }
                        }}
                    />
                    {data.maxLen && (
                        <span className={cx('len-text')}>
                            <span
                                className={cx('count-len', {
                                    'out-in-len': text.length >= data.maxLen,
                                })}
                            >
                                {text.length}
                            </span>

                            <span
                                className={cx('max-len', {
                                    'out-in-len': text.length >= data.maxLen,
                                })}
                            >
                                {' '}
                                / {data.maxLen}
                            </span>
                        </span>
                    )}
                </div>
                <p
                    className={cx({
                        waring: text.length >= data.maxLen,
                        'no-waring': !(text.length >= data.maxLen),
                    })}
                >
                    <IconWaring width="1.6rem" height="1.4rem" />
                    <span>Maximum number of characters reached</span>
                </p>

                {data.type === 'email' && !isValidEmail(text) && text.length > 0 && (
                    <p className={cx('waring-email')}>
                        <IconWaring width="1.6rem" height="1.4rem" />
                        <span>Please enter a valid Email address</span>
                    </p>
                )}
            </div>
            {Image && <img src={Image.preview} alt="Avt" className={cx('image')} />}
            <div className={cx('spacer')}></div>
        </div>
    );
}

export default Textarea;
