import config from '~/Config';
// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Error from '~/pages/Error/Error';
import MainPageUpload from '~/pages/MainPageUpload/MainPageUpload';
// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.search, component: Search },
    { path: config.routes.live, component: Live },
    { path: config.routes.error, component: Error, layout: null },
    { path: config.routes.upload, component: MainPageUpload, layout: Upload}
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
