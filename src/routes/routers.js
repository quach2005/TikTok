import config from '~/Config';
// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import LayoutTikTokStudio from '~/pages/TikTokStudio/LayoutTikTokStudio';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Error from '~/pages/Error/Error';
// Pages TikTok Studio
import Upload from '~/pages/TikTokStudio/Upload';
import HomeTikTokStudio from '~/pages/TikTokStudio/Home';
import Post from '~/pages/TikTokStudio/Post';
import Analytics from '~/pages/TikTokStudio/Analytics';
import Comment from '~/pages/TikTokStudio/Comment';
import Inspiration from '~/pages/TikTokStudio/Inspiration';
import SoundLib from '~/pages/TikTokStudio/SoundLib';
import Feedback from '~/pages/TikTokStudio/Feedback/Feedback';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.search, component: Search },
    { path: config.routes.live, component: Live },
    { path: '/*', component: Error, layout: null },
    { path: config.routes.tiktokstudio, component: HomeTikTokStudio, layout: LayoutTikTokStudio },
    { path: config.routes.upload, component: Upload, layout: LayoutTikTokStudio },
    { path: config.routes.post, component: Post, layout: LayoutTikTokStudio },
    { path: config.routes.analytics, component: Analytics, layout: LayoutTikTokStudio },
    { path: config.routes.comment, component: Comment, layout: LayoutTikTokStudio },
    { path: config.routes.inspiration, component: Inspiration, layout: LayoutTikTokStudio },
    { path: config.routes.soundLibrary, component: SoundLib, layout: LayoutTikTokStudio },
    { path: config.routes.contactUs, component: Feedback, layout: LayoutTikTokStudio },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
