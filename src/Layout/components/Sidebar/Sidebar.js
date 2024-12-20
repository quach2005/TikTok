import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { IconFollowing, IconFollowingActive, IconHome, IconHomeActive, IconLive, IconLiveActive } from '~/components/Icons';

import * as userServices from '~/services/user-services'
import config from '~/Config';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import SuggestedAccount from '~/components/SuggestedAccount';
const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar({ currentUser }) {
    const [suggest, setSuggest] = useState([])
    const [follows, setFollows] = useState([])

    const [pageSuggest, setPageSuggest] = useState(INIT_PAGE);
    const [pageFollows, setPageFollows] = useState(INIT_PAGE);

    useEffect(() => {
        userServices.getSuggest({ page: pageSuggest, perPage: PER_PAGE })
            .then(data => {
                if (pageSuggest === 1) {
                    setSuggest(data);
                } else {
                    setSuggest(prev => [...prev, ...data]);
                }
            })
            .catch(e => console.log(e))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageSuggest])

    useEffect(() => {
        userServices.getSuggest({ page: pageFollows, perPage: PER_PAGE})
            .then(data => {
                if (pageFollows === 1) {
                    setFollows(data);
                } else {
                    setFollows(prev => [...prev, ...data]);
                }
            })
            .catch(e => console.log(e))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageFollows])

    const handleSeeAll = (didFollow) => {
        if(didFollow){
            setPageFollows(prev => prev +1)
            return;
        }
        setPageSuggest(prev => prev +1);
    }

    const handleSeeLess = (didFollow) => {
        if(didFollow){
            setPageFollows(1)
            return;
        }
        setPageSuggest(1);
    }


    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title='For You' to={config.routes.home} icon={<IconHome />} activeIcon={<IconHomeActive />} />
                <MenuItem title='Following' to={config.routes.following} icon={<IconFollowing />} activeIcon={<IconFollowingActive />} />
                <MenuItem title='LIVE' to={config.routes.live} icon={<IconLive />} activeIcon={<IconLiveActive />} />
            </Menu>
            {currentUser && <SuggestedAccount label='Suggested accounts' data={suggest} onSeeAll={handleSeeAll} onSeeLess={handleSeeLess} index={pageSuggest} />}
            {currentUser && <SuggestedAccount label='Following accounts' data={follows} onSeeAll={handleSeeAll} onSeeLess={handleSeeLess} index={pageFollows} didFollow = {true}/>}
        </aside>
    );
}

export default Sidebar;
