import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {

    return (
        <>
            <h1 className={cx()}>Home Page</h1>
        </>
    )
}

export default Home;