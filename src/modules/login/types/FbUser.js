class FbUser {
  constructor(user) {
    this.token = user.accessToken;
    const name = user.name.split(' ');
    this.firstName = name[0];
    this.lastName = name[name.length - 1];
    this.email = '';
  }
}

export default FbUser;
