'use strict';

const users = {
  id: ['test', 'test2'],
  password: ['1234', '5678'],
};

const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const password = req.body.password;
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.password[idx] === password) {
        return res.json({
          success: true,
        });
      }
      return res.json({
        success: false,
        msg: '로그인 실패',
      });
    }
  },
};

module.exports = {
  output,
  process,
};
