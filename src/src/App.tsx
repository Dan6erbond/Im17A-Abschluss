import React from 'react';
import {Route, Switch} from "react-router";
import Home from "./pages/Home/Home";
import {teachers} from "./teachers";

function App() {
    return (
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            {teachers.map((t, i) => <Route key={i} path={`/${t.path}`}>
                {t.component || <div>{t.name}</div>}
            </Route>)}
        </Switch>
    );
}

export default App;
