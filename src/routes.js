import React from 'react';

import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './components/home';
// import About from './components/about';
import Projects from './components/projects';
import Archive from './components/archive';

const routes = [
    { path: '/', name: "Home", Component: Home },
    { path: '/archive', name: "Archive", Component: Archive },
    { path: '/projects', name: "Projects", Component: Projects },
]

export default function Routes() {
    const location = useLocation();
    // const { pathname, key } = location;

    return (
        <TransitionGroup component={null}>
            <CSSTransition
                key={location.key}
                timeout={600}
                classNames="anim-page"
                exit={false}
                unmountOnExit
                >
                <div className="anim-page">
                    <Switch location={location}>
                        {routes.map(({ path, Component }) => (
                            <Route key={path} exact path={path} component={Component} />
                            ))}
                    </Switch>
                </div>
            </CSSTransition >
        </TransitionGroup>
    )
}

