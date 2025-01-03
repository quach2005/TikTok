import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, title, className}) {
    const classes = cx('menu-items', {
        separate: data.separate,
        [className]: className
    });
    return (
        <Button iconLeft={data.icon} href={data.href} to={data.to} className={classes} onClick={onClick} >
            {data.title_language ? title : data.title}
        </Button>
    );
}

export default (MenuItem);
