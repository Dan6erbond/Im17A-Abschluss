import React from 'react';
import {Route, Switch} from "react-router";
import MGuignard from "./pages/MGuignard/MGuignard";
import DSchneeberger from "./pages/DSchneeberger/DSchneeberger"

function App() {
    return (
        <Switch>
            <Route path="/bLUb5kH">
                <div>Matthias Graf</div>
            </Route>
            <Route path="/N6bmxqI">
                <MGuignard/>
            </Route>
            <Route path="/SWH6Yjq">
                <div>Lil Klink</div>
            </Route>
            <Route path="/EkmjaQB">
                <div>Loredana Arleo</div>
            </Route>
            <Route path="/dshb4LF">
                <DSchneeberger/>
            </Route>
            <Route path="/hJAQqe4">
                <div>Genevieve Gross</div>
            </Route>
            <Route path="/eccFgkV">
                <div>Andreas Neeser</div>
            </Route>
            <Route path="/DSraT8n">
                <div>Sascha Fiechter</div>
            </Route>
            <Route path="/arJqAVL">
                <div>Fabian Jerg</div>
            </Route>
            <Route path="/cii6Kwf">
                <div>Alexander Flick</div>
            </Route>
            <Route path="/iy4e0Rr">
                <div>Lars Meyer</div>
            </Route>
            <Route path="/5rM6ams">
                <div>Réne Weidmann</div>
            </Route>
        </Switch>
    );
}

export default App;
