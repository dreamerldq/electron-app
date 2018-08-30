import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1 className={styles.title}>Hello World</h1>;
  }
}
ReactDOM.render(<Index/>, document.getElementById('app'));
