import React from 'react';
import {Button} from 'antd'
import ReactDOM from 'react-dom';
import {
  HashRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import { METHODS } from 'http';
import styles from './index.scss';
import MenuIndex from './menu';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h1 className={styles.title}>Hello World</h1>
        <Link to="/">主页</Link>
        <Link to="menu">副页</Link>
        <Link to="counter">计数器</Link>
      </React.Fragment>
    );
  }
}
class Counter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    
  }
  add = () => {
    this.setState({
      count: this.state.count + 1
    });
  }
  sub = () => {
    this.setState({
      count: this.state.count  -1
    })
  }
  render(){
    return(
      <React.Fragment>
        <h1>计数器</h1>
        <h2>{this.state.count}</h2>
        <Link to="/">主页</Link>
        <Link to="menu">副页</Link>
        <Link to="counter">计数器</Link>
        <Button onClick={this.add}>+</Button>
        <Button onClick={this.sub}>-</Button>
      </React.Fragment>
    )
  }
}
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/menu' component={MenuIndex}/>
        <Route path='/counter' component={Counter}/>
        </Switch>

      </Router>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));
