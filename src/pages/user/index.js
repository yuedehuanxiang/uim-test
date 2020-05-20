import React from 'react';
// import styles from './index.less';
import { Button, version } from 'antd';

// export default () => {
//   return (
//     <div>
//       <h1>{version}</h1>
//       <Button type="primary">Primary</Button>
//       <h1>user</h1>
//     </div>
//   );
// }

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times {this.props.route.path}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default Example
