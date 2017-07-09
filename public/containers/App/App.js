import React, { Component } from 'react';
import NavigationBar_b from '../../components/Navigation/NavigationBar_b';
import Home from '../../components/Home/Home';


class App extends Component {
  render() {
    return (
      <div>
     <NavigationBar_b/>
     
     {this.props.children}
     </div>
    );
  }
}

export default App;
