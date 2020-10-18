import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Category from './category/Index';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header(){
	return(
		<Router>
		<div>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/About">About</Link>
      </li>
	  
	  <li className="nav-item">
        <Link className="nav-link" to="/Category" >Category</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" to="/Contact" >Contact</Link>
      </li>
	  <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </ul>
    
  </div>
</nav>

		<Route exact path='/' component={Home} />
		<Route exact path='/About' component={About} />
		<Route exact path='/Services' component={Services} />
		<Route exact path='/Category' component={Category} />
		<Route exact path='/Contact' component={Contact} />

		


		</div>
		</Router>
		);
}

export default Header;