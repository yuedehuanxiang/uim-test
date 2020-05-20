
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import styles from './index.less'

export default function (props) {
  if (props.location.pathname === '/login') {
    return (
      <Layout style={{ height: '100vh' }}>
        <Header>欢迎光临</Header>
        <Content>{props.children}</Content>
        <Footer style={{ textAlign: "center" }}>升值科技有限公司</Footer>
      </Layout>
    )
  }

  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}