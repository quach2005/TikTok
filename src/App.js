import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import LoadingProgress from './pages/Main/Loading';
import NoInternet from './pages/NoInternet';
function App() {
    const [isOnline, setisOnline] = useState(navigator.onLine);
    useEffect(() => {
        window.addEventListener('online', () => setisOnline(true));
        window.addEventListener('offline', () => setisOnline(false));

        return () => {
            window.addEventListener('online', () => setisOnline(true));
            window.addEventListener('offline', () => setisOnline(false));
        };
    })

    const renderRoutes = (pages = []) => (
        pages.map((route, index) =>
            <Route key={index} path={route.path} element={<route.element />} >
                {route.index && <Route index element={<route.element />} />}
                {route.children && renderRoutes(route.children)}
            </Route>
        )
    )
    if (!isOnline) {
        return <NoInternet />
    }
    return (
        <Router>
            <div className="App" translate='no'>
                <LoadingProgress />
                <Routes>
                    {renderRoutes(publicRoutes)}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
