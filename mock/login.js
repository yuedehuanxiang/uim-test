export default {
  'POST /api/login/account': (req, res) => {
    const { password, userName, type } = req.body;
    if (password === '123' && userName === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      return;
    }
    res.send({
      status: 'error',
      msg: '密码或者账号错误请重试',
      type,
      currentAuthority: 'guest',
    });
  },
}