import { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from '~/routes';
import DefaultLayout from './Layout';
import { AuthContext } from '~/AuthContext/AuthContext';
import LayoutSignAndLogin from './pages/Login&Sign/Layout';
function App() {
    const { user, passedLogin } = useContext(AuthContext);

    return (
        <Router>
            <div className="App" translate='no'>
                {passedLogin && <LayoutSignAndLogin />}
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    Layout === Fragment ? <Page /> : <Layout currentUser={user}><Page /></Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
