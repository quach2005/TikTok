import config from '~/Config';
// Pages
import Home from '~/pages/Main/Home';
import Following from '~/pages/Main/Following';
import Profile from '~/pages/Main/Profile';
import LayoutTikTokStudio from '~/pages/TikTokStudio/LayoutTikTokStudio';
import Search from '~/pages/Main/Search';
import Live from '~/pages/Main/Live';
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
import DefaultLayout from '~/Layout';
import { Outlet } from 'react-router-dom';

const Studio = [
    {
        element: Upload,
        path: config.routes.upload
    },
    {
        element: HomeTikTokStudio,
        path: config.routes.studioHome
    },
    {
        element: Post,
        path: config.routes.post
    },
    {
        element: Analytics,
        path: config.routes.analytics
    },
    {
        element: Comment,
        path: config.routes.comment
    },
    {
        element: Inspiration,
        path: config.routes.inspiration
    },
    {
        element: SoundLib,
        path: config.routes.soundLibrary
    },
    {
        element: Outlet,
        path: config.routes.help,
        children: [
            {
                element: Feedback,
                path: config.routes.contactUs
            }
        ]
    }
]

const Main = [
    {
        element: Home,
        index: true,
    },
    {
        element: Home,
        path: config.routes.home
    },
    {
        element: Following,
        path: config.routes.following
    },
    {
        element: Live,
        path: config.routes.live
    },
    {
        element: Profile,
        path: config.routes.profile
    },
    {
        element: Search,
        path: config.routes.search
    }
]

const app = [
    {
        element: DefaultLayout,
        path: '/',
        children: Main
    },
    {
        element: LayoutTikTokStudio,
        path: config.routes.tiktokstudio,
        children: Studio
    },
    {
        element: Error,
        path: config.routes.error
    }
]
const publicRoutes = app;

const privateRoutes = [];

export { publicRoutes, privateRoutes }