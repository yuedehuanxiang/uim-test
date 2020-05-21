
import { Layout } from 'antd';
const { Footer, Content } = Layout;
import styles from './index.less'

export default function (props) {
  return (
    <Layout className={styles.loginBg} style={{ height: '100vh' }}>
      <Content>{props.children}</Content>
      <Footer style={{ textAlign: "center" }}>升值科技有限公司</Footer>
    </Layout>
  )
}