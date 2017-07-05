import React, { Component } from 'react';
import NavigationBar from '../../components/Navigation/NavigationBar';
import Home from '../../components/Home/Home';


class App extends Component {
  render() {
    return (
      <div>
     <NavigationBar/>
     <Home/>
     {this.props.children}
     </div>
    );
  }
}

export default App;
