import { Outlet } from 'react-router-dom';
import config from '~/Config';
// Main Pages
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
import Trending from '~/pages/TikTokStudio/Inspiration/Trending';
import Recommended from '~/pages/TikTokStudio/Inspiration/Recommended';
import MyInspiration from '~/pages/TikTokStudio/Inspiration/My_inspiration';

const Studio = [
    {
        component: <Upload />,
        path: config.routes.upload
    },
    {
        component: <HomeTikTokStudio />,
        path: config.routes.studioHome
    },
    {
        component: <Post />,
        path: config.routes.post
    },
    {
        component: <Analytics />,
        path: config.routes.analytics
    },
    {
        component: <Comment />,
        path: config.routes.comment
    },
    {
        component: <Inspiration />,
        path: config.routes.inspiration,
        children: [
            {
                component: <Trending/>,
                path: config.routes.treding,
            },
            {
                component: <Recommended />,
                path: config.routes.recommended
            },
            {
                component: <MyInspiration/>,
                path: config.routes.my_inspiration
            }
        ]
    },
    {
        component: <SoundLib />,
        path: config.routes.soundLibrary
    },
    {
        component: <Outlet />,
        path: config.routes.help,
        children: [
            {
                component: <Feedback />,
                path: config.routes.contactUs
            }
        ]
    }
]

const Main = [
    {
        component: <Home />,
        index: true,
    },
    {
        component: <Home />,
        path: config.routes.home
    },
    {
        component: <Following />,
        path: config.routes.following
    },
    {
        component: <Live />,
        path: config.routes.live
    },
    {
        component: <Profile />,
        path: config.routes.profile
    },
    {
        component: <Search />,
        path: config.routes.search
    }
]

const app = [
    {
        component: <DefaultLayout />,
        path: '/',
        children: Main
    },
    {
        component: <LayoutTikTokStudio />,
        path: config.routes.tiktokstudio,
        children: Studio
    },
    {
        component: <Error />,
        path: config.routes.error
    }
]
const publicRoutes = app;

const privateRoutes = [];

export { publicRoutes, privateRoutes }