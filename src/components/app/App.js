import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import About from '../../routes/about/About';
import Home from '../../routes/home/Home';
import Header from './header/Header';


class App extends React.Component {

  render() {

    return (
        <Router>
          <div className="App">
            <div className="container">
              <Header />
              <Button primary>Just a button, nothing fancy</Button>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
