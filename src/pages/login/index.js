import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { connect } from 'umi';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = ({ dispatch, loading }) => {
  const onFinish = values => {
    console.log('Success:', values);
    dispatch({
      type: 'login/login',
      payload: { ...values },
    });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row style={{ height: '100%' }} justify="space-around" align="middle">
      <Col span={6} pull={1}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="userName"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="type" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button block type="primary" htmlType="submit" loading={loading}>
              Submit
        </Button>
          </Form.Item>
        </Form>
      </Col>

    </Row>

  );
};

function mapStateToProps(state) {
  const { status } = state.login;
  return {
    status,
    loading: state.loading.models.login,
  };
}

export default connect(mapStateToProps)(Login)