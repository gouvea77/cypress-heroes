import userData from "../../fixtures/userData.json"
import HomePage from "../pages/homePage";

const homePage = new HomePage;

describe('Login Specs', () => {

  it('Try to Login with invalid user', () => {
    homePage.acessHomePage()
    homePage.loginWithInvalidUser(userData.loginFail.email, userData.loginFail.password)
  });

  it('Try to Login with valid user', () => {
    homePage.acessHomePage()
    homePage.loginWithValidUser(userData.loginSucess.email, userData.loginSucess.password)
  });

});