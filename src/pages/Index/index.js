import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
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
      </React.Fragment>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/menu' component={MenuIndex}/>
        </Switch>

      </Router>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));
