
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
    }, 1000);
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.props.dispatch({
      type: 'login/save',
      payload: { ...userInfo },
    })

  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    if (this.props.status === 'ok' && this.state.loading) {
      return <Redirect to={`/home/welcome`} />
    }
    if (this.state.loading) {
      return <Redirect to={`/user/login`} />
    } else {
      return <img style={{ height: '100vh' }} src={require('../assets/loading.svg')} alt="logo" width="100%" />
    }
  }
}

function mapStateToProps(state) {
  const { status } = state.login;
  return {
    status
  };
}


export default connect(mapStateToProps)(SecurityLayout)
