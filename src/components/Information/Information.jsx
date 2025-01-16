import classNames from 'classnames/bind';

import Button from '../Button';
import Image from '../img/Image';
import style from './Information.module.scss';

const cx = classNames.bind(style);
function Information({ data }) {
    if (!data) {
        return <></>;
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <h2>{data.title}</h2>
                <Button href={data.href} to={data.to}>
                    {data.icon}
                </Button>
            </div>
            {data.content?.map((item, index) => (
                <div className={cx('content')} key={index}>
                    <Image src={item.img} alt={item.title} />
                    <div>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Information;
