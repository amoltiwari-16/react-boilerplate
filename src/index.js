import React from 'react';
import { render } from 'react-dom';
//import { BrowserRouter as Router, Link, Route, hashHistory, IndexRoute } from 'react-router-dom';
import { data } from "./data/data";
import { Accordian } from './components/Accordian/Accordian';

//import About from './components/About/About.js';

//render(<App/>, document.getElementById("app"));
/*
render(
<Router>
<span>
	<Route exact={true} path="/" component={App} />
	<Route exact={true} path="/about/" component={About} />
</span>
</Router>
,
document.getElementById("app")
);
*/

render(<Accordian>{data}</Accordian>,
document.getElementById("app"));