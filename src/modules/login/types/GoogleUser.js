class GoogleUser {
  constructor(user) {
    this.token = user.accessToken;
    this.firstName = user.profileObj.givenName;
    this.lastName = user.profileObj.familyName;
    this.email = user.profileObj.email;
  }
}

export default GoogleUser;
