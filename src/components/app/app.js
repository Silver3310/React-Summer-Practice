import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from '../../routes/about';
import Home from '../../routes/home';
import Header from './header';


class App extends React.Component {

  render() {

    return (
        <Router>
          <div className="App">
            <div className="container">
              <Header />
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
