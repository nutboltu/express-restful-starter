export default class UserModel {
  constructor(userData) {
    this.user = {
      id: userData.id,
      username: userData.username,
      email: userData.email,
      password: userData.password,
      firstName: userData.firstName,
      lastName: userData.lastName,
    }
    return this;
  }

  getId() {
    return this.user.id;
  }

  getUsername() {
    return this.user.username;
  }

  validPassword(password) {
    return this.user.password === password;
  }

  toObject() {
    return this.user;
  }
}
