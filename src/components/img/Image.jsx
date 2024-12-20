
import { forwardRef, useState } from 'react';
import classNames from 'classnames';

import styles from './Img.module.scss';
import images from '~/assets/images';


function Image({ fallback: customFallback = images.noImage, src, alt, className, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
