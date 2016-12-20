import React from "react";
import {render} from "react-dom";
import IndexPage from './components/IndexPage';

class App extends React.Component {
  render () {
    return <IndexPage />;
  }
}

render(<App/>, document.getElementById('app'));
