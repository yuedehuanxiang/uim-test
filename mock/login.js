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
      type,
      currentAuthority: 'guest',
    });
  },
}