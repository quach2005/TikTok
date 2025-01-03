import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import './Loading.css';

NProgress.configure({
    showSpinner: false,
    trickleSpeed: 800,
    minimum: 0.2,
    easing: 'ease',
    speed: 500,
});

function LoadingProgress() {
    const location = useLocation();

    useEffect(() => {
        NProgress.start();
        setTimeout(() => {
            NProgress.done();
        }, 300);
    }, [location]);

    return null;
}

export default LoadingProgress;
