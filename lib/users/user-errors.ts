export enum UserErrors {
  invalidUsernamePassword = "Please enter a valid username and / or password.",
  unknownUser = "404 - User is not authorised. Please create a new account.",
  wrongPassword = "401 - The password is incorrect.",
  unhandledException = "500 - An unhandled exception occurred. Please contact the developer.",
}
