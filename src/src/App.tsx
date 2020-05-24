import React, {useEffect} from 'react';
import {Route, Switch, useLocation} from "react-router";
import Home from "./pages/Home/Home";
import {teachers} from "./teachers";
import Imprint from "./pages/Imprint/Imprint";
import Pages from "./pages/Pages";
import {History} from "history";

interface AppProps {
    history: History;
}

function App(props: AppProps) {
    const {history} = props;

    const {pathname} = useLocation();

    useEffect(() => {
        if (process.env.NODE_ENV !== 'development') window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/imprint" exact>
                <Imprint/>
            </Route>
            {teachers.map((t, i) => <Route key={i} path={`/${t.path}`}>
                {Pages(t, history)}
            </Route>)}
        </Switch>
    );
}

export default App;
