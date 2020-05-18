import React, {useEffect} from 'react';
import {Route, Switch, useLocation} from "react-router";
import Home from "./pages/Home/Home";
import {teachers} from "./teachers";

function App() {
    const {pathname} = useLocation();

    useEffect(() => {
        if (process.env.NODE_ENV !== 'development') window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Switch>
            {teachers.map((t, i) => <Route key={i} path={`/${t.path}`}>
                {t.component || <div>{t.name}</div>}
            </Route>)}
        </Switch>
    );
}

export default App;
