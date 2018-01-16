import React, { Component } from 'react'
import Header from './Header';
import Content from './Content';

class App extends Component {
  render() {
    return <div className="app-container">
            <Header />
            <Content />
            <div className="footer">
                <a href="https://miguelthedev.com/">
                    &copy; 2018 Miguel Sanchez
                </a>
            </div>
        </div>;
  }
}

export default App;