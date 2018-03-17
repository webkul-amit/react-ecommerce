import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  
  render() {

    return (
      <header>
        <div className="container fixed-top">
            
          <div className="row">

              <div className="col-md-12">

                  <h2 className="text-center tagline white">Webkul Products Demo using React</h2>

              </div>

          </div>

        </div>

      </header>

    );
  }
}

export default Header;
