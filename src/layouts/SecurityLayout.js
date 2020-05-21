
import React from 'react'
import { Redirect, connect, ConnectProps } from 'umi';

class SecurityLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  componentDidMount() {
    this.timerID = setTimeout(() => {
      this.setState({
        loading: true
      })
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    if (this.state.loading) {
      return <Redirect to={`/welcome`} />
    } else {
      return <h1>loading</h1>
    }
  }
}
// function SecurityLayout() {
//   return (
//     <div>
//       <h1>
//         welcome
//       </h1>
//     </div>
//   )
// }

export default SecurityLayout
