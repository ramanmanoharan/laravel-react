import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
function Index() {
    return (
        <div className="container">
        <Header/>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">I am from Index</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Index;

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
