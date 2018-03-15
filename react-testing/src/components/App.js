import React, { Component } from 'react';
import './App.css';
import Grid from './listings/Grid';
import movies from '../data/movies.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movies };
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <nav class="navbar navbar-light bg-light">
              <span class="navbar-brand mb-0 h1">Movies</span>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Grid items={this.state.movies}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
