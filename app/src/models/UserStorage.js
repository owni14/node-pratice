'use strict';

class UserStorage {
  static #users = {
    id: ['test', 'test2'],
    password: ['1234', '5678'],
    name: ['kim', 'lee'],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static save(userInfo) {
    console.log('userInfo:: ', userInfo);
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.naem);
    users.password.push(userInfo.password);
    return { success: true };
  }
}

module.exports = UserStorage;
