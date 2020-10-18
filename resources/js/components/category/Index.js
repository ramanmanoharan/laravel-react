import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Add from './Add';
import Listing from './Listing';



function Index(){
	return(
		<div>
		<Router>
            <div>
                <hr/>
                <Link to="/Category" className="btn btn-primary">Listing</Link>&nbsp;&nbsp;
                <Link to="/Add"  className="btn btn-primary">Add</Link>
                <Route exact path='/Category' component={Listing} />
                <Route exact path='/Add' component={Add} />

            </div>
        </Router>
		</div>

		);
}

export default Index;